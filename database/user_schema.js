/**
 * 데이터베이스 스키마를 정의하는 모듈
 *
 * @date 2016-11-10
 * @author Mike
 */

var crypto = require('crypto');

var Schema = {};

Schema.createSchema = function (mongoose) {
	// 스키마 정의
	var UserSchema = mongoose.Schema({
		email: { type: String, default: '' },
		admin: { type: String, default: 'none' },
		hashed_password: { type: String, default: '' },
		group: { type: String, index: 'hashed', default: '' },
		groupInfo: { type: mongoose.Schema.ObjectId, ref: 'group' },
		name: { type: String, index: 'hashed', default: '' },
		friends: [{ type: String, default: '' }],
		recommanedBook: [{  type: mongoose.Schema.ObjectId, ref: 'book' }],
		own_number: { type: String, default: '' },
		profile_path: { type: String, default: '/public/images/pic05.png' },
		reservationlist: [{ type: mongoose.Schema.ObjectId, ref: 'book' }],
		myBookList: [{ type: mongoose.Schema.ObjectId, ref: 'reservation' }],
		alert: { default: '' },
		salt: { type: String },
		created_at: { type: Date, index: { unique: false }, default: Date.now },
		updated_at: { type: Date, index: { unique: false }, default: Date.now },
		provider: { type: String, default: '' },
		authToken: { type: String, default: '' },
		PreviousPage: { type: String, default: '0' },
	});

	// password를 virtual 메소드로 정의 : MongoDB에 저장되지 않는 편리한 속성임. 특정 속성을 지정하고 set, get 메소드를 정의함
	UserSchema.virtual('password')
		.set(function (password) {
			this._password = password;
			this.salt = this.makeSalt();
			this.hashed_password = this.encryptPassword(password);
			
		})
		.get(function () {
			return this._password;
		});

	// 스키마에 모델 인스턴스에서 사용할 수 있는 메소드 추가
	// 비밀번호 암호화 메소드
	UserSchema.method('encryptPassword', function (plainText, inSalt) {
		if (inSalt) {
			return crypto.createHmac('sha1', inSalt).update(plainText).digest('hex');
		} else {
			return crypto.createHmac('sha1', this.salt).update(plainText).digest('hex');
		}
	});

	// salt 값 만들기 메소드
	UserSchema.method('makeSalt', function () {
		return Math.round(new Date().valueOf() * Math.random()) + '';
	});

	// 인증 메소드 - 입력된 비밀번호와 비교 (true/false 리턴)
	UserSchema.method('authenticate', function (plainText, inSalt, hashed_password) {
		if (inSalt) {
		
			return this.encryptPassword(plainText, inSalt) === hashed_password;
		} else {
	
			return this.encryptPassword(plainText) === this.hashed_password;
		}
	});

	UserSchema.method('checkValidation', function () {
		return this.provider == '';
	});

	// 값이 유효한지 확인하는 함수 정의
	var validatePresenceOf = function (value) {
		return value && value.length;
	};

	// 저장 시의 트리거 함수 정의 (password 필드가 유효하지 않으면 에러 발생)
	UserSchema.pre('save', function (next) {
		if (!this.isNew) return next();

		if (!validatePresenceOf(this.password) && this.checkValidation()) {
			next(new Error('유효하지 않은 password 필드입니다.'));
		} else {
			next();
		}
	});

	// 입력된 칼럼의 값이 있는지 확인
	UserSchema.path('email').validate(function (email) {
		if (!this.checkValidation()) return true;
		return email.length;
	}, 'email 칼럼의 값이 없습니다.');

	UserSchema.path('hashed_password').validate(function (hashed_password) {
		if (!this.checkValidation()) return true;
		return hashed_password.length;
	}, 'hashed_password 칼럼의 값이 없습니다.');

	// 스키마에 static 메소드 추가
	UserSchema.static('findByEmail', function (email, callback) {
		return this.findOne({ email: email }).populate('reservationlist', 'title author created_at updated_at').exec(callback);
	});

	UserSchema.static('findAll', function (callback) {
		return this.find({}, callback);
	});
	
	UserSchema.static('load2', function(options, callback) {
		options.select = options.select ;
		this.findOne({ email: options.email })
		.populate('reservationlist', 'title author updated_at')
			.select(options.select)
			.exec(callback);
	});
	UserSchema.static('load', function (options, callback) {
		options.select = options.select ;
		this.findOne(options.criteria)
			.populate('reservationlist', 'title author updated_at')
			.select(options.select)
			.exec(callback);
	});
UserSchema.static('load4', function (options, callback) {
		options.select = options.select ;
		this.find(options.criteria)
			.populate('reservationlist', 'title author updated_at')
			.select(options.select)
			.exec(callback);
	});
	UserSchema.static('list', function (options, callback) {
		var criteria = options.criteria || {};

		this.find(criteria)
			.sort({ created_at: -1 })
			.limit(Number(options.perPage))
			.skip(options.perPage * options.page)
			.exec(callback);
	});

	// 모델을 위한 스키마 등록
	mongoose.model('User', UserSchema);

	console.log('UserSchema 정의함.');

	return UserSchema;
};

// module.exports에 UserSchema 객체 직접 할당
module.exports = Schema;