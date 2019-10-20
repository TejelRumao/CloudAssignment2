import { getMaxListeners } from "cluster";

let db ={
    users:[
        {
            userId:'bcd34hfg56hj4kl',
            email:'user@gmail.com',
            handle:'user',
            createdAt:'2019-08-10T10:58:72.789Z',
            imageUrl:'image/dsfgdsfg',
            bio:'Hello How are you',
            website:'http://user.com',
            loaction:'Melbourne'
        }
    ],
    screams:[
        {
            userHandle :'user',
            body:'this is scream body',
            createdAt :'2019-03-15T11:46:01.018Z',
            likeCount:5,
            commentCount:2
        }
    ]
    ,
    comments:[
        {
            userHandle :'user',
            screamId:'HJKGBN',
            body:'this is scream body',
            createdAt :'2019-03-15T11:46:01.018Z',
         }
    ],
    notifications: [
        {
          recipient: 'user',
          sender: 'john',
          read: 'true | false',
          screamId: 'kdjsfgdksuufhgkdsufky',
          type: 'like | comment',
          createdAt: '2019-03-15T10:59:52.798Z'
        }
      ]
};
const userDetails ={
    //Redux data
    credentials:{
        userId:'bcd34hfg56hj4kl',
        email:'user@gmail.com',
        handle:'user',
        createdAt:'2019-08-10T10:58:72.789Z',
        imageUrl:'image/dsfgdsfg',
        bio:'Hello How are you',
        website:'http://user.com',
        loaction:'Melbourne'
    },
    likes :[
        {
            userHandle :'user',
            screamId:'hh7085wEfDGHHH'
        },
        {
            userHandle :'user',
            screamId:'hh7085wEfDGHHH'
        }
    ]
}