module.exports = {
	server_port: 80,
	db_url: 'mongodb://localhost:27017/admin',
	db_schemas: [
        {file:'./user_schema', collection:'user7', schemaName:'UserSchema', modelName:'UserModel'}
		,{file:'./book_schema', collection:'book', schemaName:'BookSchema', modelName:'BookModel'}
		,{file:'./review_schema', collection:'review', schemaName:'ReviewSchema', modelName:'ReviewModel'}
		,{file:'./reservation_schema', collection:'reservation', schemaName:'ReservationSchema', modelName:'ReservationModel'}
		,{file:'./applybook_schema', collection:'AppplyBook', schemaName:'AppplyBookSchema', modelName:'AppplyBookModel'}
		,{file:'./history_schema', collection:'bookpost', schemaName:'BookPostSchema', modelName:'BookPostModel'}
		,{file:'./announcement_schema', collection:'announcement', schemaName:'AnnouncementSchema', modelName:'AnnouncementModel'}
		,{file:'./group_schema', collection:'group', schemaName:'GroupSchema', modelName:'GroupModel'}
		,{file:'./message_schema', collection:'message', schemaName:'MessageSchema', modelName:'MessageModel'}
	],
	route_info: [
		{file:'./showList', path:'/book/listpost', method:'listpost', type:'get'}
		,{file:'./showList', path:'/views/myPage', method:'reservationList', type:'get'}
		,{file:'./showList', path:'/book/listapplybook', method:'listapplybook', type:'get'}
		,{file:'./showList', path:'/user/requestlist', method:'requestlist', type:'get'}
		,{file:'./showList', path:'/dev/announcement', method:'devAnnouncement', type:'get'}
		,{file:'./showList', path:'/admin/announcement', method:'devAnnouncement', type:'get'}
		
		,{file:'./book', path:'/book/addbook', method:'addbook', type:'post'}
		,{file:'./book', path:'/book/showbook/:id', method:'showbook', type:'get'}
		,{file:'./book', path:'/book/lend', method:'borrow', type:'post'}
		,{file:'./book', path:'/book/reservation', method:'reservation', type:'post'}
		,{file:'./book', path:'/book/addreview', method:'addReview', type:'post'}
		,{file:'./book', path:'/review/removereview', method:'removeReview', type:'post'}
		,{file:'./book', path:'/book/return/:id', method:'giveBack', type:'get'}
		,{file:'./book', path:'/book/search', method:'search', type:'post'}
		,{file:'./book', path:'/book/search', method:'search', type:'get'}
		,{file:'./book', path:'/searchGroup', method:'searchGroup', type:'get'}
		,{file:'./book', path:'/book/delete/:id', method:'deleteBookFun', type:'get'}
		
		,{file:'./modifyBook', path:'/book/modify', method:'updatepost', type:'post'}
		,{file:'./modifyBook', path:'/book/update', method:'saveupdatedpost', type:'post'}
		
		,{file:'./BookRequest', path:'/book/applyBook', method:'applyBook', type:'post'}
		,{file:'./BookRequest', path:'/requestBook', method:'requestBook', type:'post'} 
		,{file:'./BookRequest', path:'/book/acceptRequest/:id', method:'acceptRequest', type:'get'}
		
		,{file:'./user', path:'/user/modifyUser', method:'modifyUser', type:'post'}
		,{file:'./user', path:'/user/deleteUser', method:'deleteUser', type:'post'}
		,{file:'./user', path:'/user/acceptAdminRequest/:id', method:'acceptAdminRequest', type:'get'}
		,{file:'./user_admin', path:'/user/admin', method:'adminpage', type:'get'}
		,{file:'./user_admin', path:'/user/adminpage', method:'searchadminpage', type:'get'}
		,{file:'./showQRcode', path:'/book/loanByQrcode/:id', method:'loanByQrcode', type:'get'}
		
		,{file:'./HistoryOfBook', path:'/post/addHistoryOfBook', method:'addHistoryOfBook', type:'post'}
		,{file:'./HistoryOfBook', path:'/post/addHistoryOfBook/:id', method:'addHistoryOfBook', type:'get'}
		,{file:'./HistoryOfBook', path:'/history/:id', method:'showHistory', type:'get'}
		,{file:'./HistoryOfBook', path:'/historyofbook', method:'listHistoryOfBook', type:'get'}

		,{file:'./HistoryOfBook', path:'/post/deleteHistoryOfBook/:id', method:'deleteHistoryOfBook', type:'get'}

		,{file:'./showAnnouncement', path:'/announce/show/:id', method:'showAnnounceFun', type:'get'}
		
		,{file:'./announcement', path:'/deleteAnnouncement/dev/:id', method:'deleteAnnounceFun', type:'get'}
		,{file:'./announcement', path:'/addAnnouncement', method:'addAnnounceFun', type:'post'}
		,{file:'./announcement', path:'/deleteAnnouncement/admin/:id', method:'deleteAnnounceFun', type:'get'}
		
		,{file:'./index_supply', path:'/index/announce', method:'insertAnnouncement', type:'get'}
		,{file:'./index_supply', path:'/index/newBook', method:'insertNewBook', type:'get'}
		
		,{file:'./profile', path:'/user/profile_reivew', method:'profile_review', type:'get'}
		,{file:'./profile', path:'/user/friend_profile_reivew', method:'friend_profile_review', type:'get'}
		,{file:'./profile', path:'/user/profile_bookLog', method:'profile_bookLog', type:'get'}
		,{file:'./profile', path:'/user/friend_profile_bookLog', method:'friend_profile_bookLog', type:'get'}
		,{file:'./profile', path:'/user/loadfriends', method:'friend_list', type:'get'}
		
		,{file:'./findFriend', path:'/user/friend', method:'findFriends', type:'post'}
		,{file:'./findFriend', path:'/user/friend', method:'findFriends', type:'get'}
		,{file:'./plusFriend', path:'/user/plusfriend', method:'plusFriends', type:'get'}
		,{file:'./message', path:'/user/loadmessage', method:'loadmessage', type:'get'}
		,{file:'./message', path:'/user/deleteMessage/:id', method:'deletemessage', type:'get'}
		,{file:'./recommandFriend', path:'/user/sendRecommand', method:'sendRecommand', type:'post'}
		,{file:'./whoelseread', path:'/user/readuser', method:'readuser', type:'get'}
	],
};
