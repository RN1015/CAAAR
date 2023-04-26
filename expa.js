const express =require('express');
const packages=require('./public/packages')
const app=express()
const nodemailer = require('nodemailer');
const Place = require(__dirname+'/models/place.js');
const Feedback = require(__dirname+'/models/feedback.js');
const package=require(__dirname+'/models/package.js');
const User = require(__dirname+"/models/user.js");
const Guide = require(__dirname+"/models/guide.js");
const Hotel = require(__dirname+"/models/hotel.js");
const Travel = require(__dirname+"/models/travel.js");
const Slot = require(__dirname+"/models/slot.js")
const Announcement = require(__dirname+"/models/announcement.js")
const sqlite3=require('sqlite3').verbose();
const mongoose = require('mongoose');
const placedetails=["Agartala", "Ahmedabad", "Agra", "Aizawl", "Amritsar", "Araku", "Aurangabad", "Bhubaneshwar", "Bodhgaya", "Bokaro", "Chandigarh", "Cherrapunji", "Coorg", "Dimapur", "Guwahati", "Gulmarg", "Gwalior", "Hampi", "Hyderabad", "Imphal", "Itanagar", "Jagdalpur", "Jaipur", "Jaisalmer", "Jamshedpur", "Jalandhar", "Kailashahar", "Kanyakumari", "Khajuraho", "Kochi", "Kohima", "Kozhokode", "Konark", "Leh", "Lucknow", "Mahabaleshwar", "Mamit", "Manali Tehsil", "Mathura", "Mumbai", "Munnar", "Mysore", "Mussorie", "Nainital", "Nalanda", "North Goa", "Pondicherry", "Panipat", "Puri", "Raipur", "Rishikesh", "Shillong", "Shimla", "Sikkim State", "Srinagar", "South Goa", "Tawang", "Thiruvananthapuram"]
const session =  require('express-session');
let guidedetails="";
let hotelvalue="";
let travelvalue=""
let x = true;
let uid="";
let uname="";
let newPlace ="";
let placer=""
let value="";
let ev=""; // email valid
let ep=""; // entry of password
let cep=""; //confirm entry of password
let eae=""; 
let sn=""; //incorrect login credentiatls
let y = "Pendiing"
let emails=[];
const bcrypt = require('bcryptjs');
const { ObjectId } = require('mongodb');
let db=new sqlite3.Database('regData/demo.db',(err)=>{
  if(err)
  console.error(err.message);
})

app.use(express.json())

function isAuthorised(req, res, next)  
{
    if (req.session.isAuth) {
      next();
    } else {
      req.session.error = "You have to Login first";
      res.redirect("/Login");
    }
  };
function isAdminAuthorised(req, res, next)  
{
    if (req.session.isAdminAuth) {
      next();
    } else {
      req.session.error = "You have to Login first";
      res.redirect("/Login");
    }
  };
function isGuideAuthorised(req, res, next)  
{
    if (req.session.isGuideAuth) {
      next();
    } else {
      req.session.error = "You have to Login first";
      res.redirect("/Guidelogin");
    }
  };
function isHotelAuthorised(req, res, next)  
{
    if (req.session.ishotelAuth) {
      next();
    } else {
      req.session.error = "You have to Login first";
      res.redirect("/HotelLogin");
    }
};
function isTravelAuthorised(req, res, next)  
{
    if (req.session.isTravelAuth) {
      next();
    } else {
      req.session.error = "You have to Login first";
      res.redirect("/TravelLogin");
    }
};

const dbURI='mongodb+srv://chandra:chakri9494@nodetuts.nyzp71i.mongodb.net/ffsd?retryWrites=true&w=majority'
mongoose.connect(dbURI,{ useNewUrlParser:true, useUnifiedTopology:true})
    .then((result) =>app.listen(3000))
    .catch((err)=>console.log(err))


    app.use(
        session({
          secret: "secret",
          resave: false,
          saveUninitialized: false,
        //   store: store,
        })
      );

app.use(express.urlencoded({extended:false}))
// view engine
app.set('view engine','ejs');


app.use(express.static(__dirname+'/public'));
  
app.get('/',async (req,res)=>{
    const docs = await Announcement.find({}).sort({createdAt:-1})
        // console.log(docs[0].adminannouncement);
    res.render('index',{ title:'Home',x:x,docs});
});

app.get('/planTour',(req,res)=>{
    Place.find({})
    .then((data)=>{
        package.find({}).then((packages)=>{ 
            res.render('planTour',{places: data,packages:packages,x:x});   
            }).catch((err)=>{
                console.log(err);
            })
        })
})

app.get('/join',(req,res)=>{
    res.render('join',{title:'Join',x:x})
})

app.get('/contact',(req,res)=>{
    res.render('contact',{ title:'Contact',x:x});
})


app.get('/GuideReg',(req,res)=>{
    res.render('guidereg',{ title:'GuideReg',location:placedetails});
})

app.get('/Guidelogin',(req,res)=>{
    res.render('Guidelogin',{ title:'GuideLogin',sn});
})

app.get('/HotelReg',(req,res)=>{
    res.render('hotelreg',{ title:'HotelReg',location:placedetails});
})

app.get('/HotelLogin',(req,res)=>{
    res.render('hotellogin',{ title:'HotelLogin',sn});
})

app.get('/TravelReg',(req,res)=>{
    res.render('travelreg',{ title:'TravelReg',location:placedetails});
})

app.get('/TravelLogin',(req,res)=>{
    res.render('travellogin',{ title:'TravelLogin',sn});
})

app.get('/register',uplog,(req,res)=>{
    res.render('register',{ ev,ep,cep});
})

app.get('/Login',inclog,(req,res,next)=>{
    res.render('Login',{title:'Login',sn})
})


app.get('/tourplaces',(req,res)=>{
    let place=req.query.place;
    newPlace=place;
    placer=place.split(',');
    placer=placer[0].trim();
    // console.log(place);
    package.find().then((details)=>{
        details.filter((detail)=>{
           return (detail.name==newPlace||detail.name==placer)
        })
    //    console.log(details,'...');
       
        res.render('tourplaces',{ title:place,details:details[0],x:x});
    }).catch((err)=>{
        console.log(err);
    })
})


app.get('/booking',isAuthorised,(req,res)=>{


    Guide.find({location:placer})
      .then((data1)=>{ 
        guide = data1;
        console.log(placer)
        Travel.find({location:placer})
        .then((data2)=>{ 
         agency = data2;
         Hotel.find({location:placer})
         .then((data3)=>{ 
           hotel = data3;
        //    console.log(guide[0].guide_name)
           res.render('booking',{title:'booking',x:x,guide:guide,agency:agency,hotel:hotel});
           

         })

      })
      })
})




app.get('/adminlogout',isAdminAuthorised,(req,res)=>{
    x = true;
    req.session.destroy((err)=>{
        if(err) throw err
    })
    res.redirect('/');
})

app.get('/logout',isAuthorised,(req,res)=>{
    x=true;
    req.session.destroy((err)=>{
        if (err) throw error
    })
    res.redirect("/");
})
app.get('/guidelogout',isGuideAuthorised,(req,res)=>{
    x=true;
    req.session.destroy((err)=>{
        if (err) throw error
    })
    res.redirect("/");
})

app.get('/hotellogout',isHotelAuthorised,(req,res)=>{
    x=true;
    req.session.destroy((err)=>{
        if (err) throw error
    })
    res.redirect("/");
})


app.get('/travellogout',isTravelAuthorised,(req,res)=>{
    x=true;
    req.session.destroy((err)=>{
        if (err) throw error
    })
    res.redirect("/");
})




app.get('/admin',isAdminAuthorised,async (req,res)=>{
    const cc = await User.find({})
    const hc = await Hotel.find({})
    const gc = await Guide.find({})
    const tc = await Travel.find({})
    // console.log(cc.length);
    // console.log(docs)
    res.render('admin',{cc,hc,gc,tc})
})

// User.find({}).toArray(function(err, docs) {
//     if (err) {
//       console.log('Unable to fetch documents:', err);
//       return;
//     }
//     res.render('userdetails',docs);
// })



app.get('/userdetails',isAdminAuthorised,async (req,res)=>{

    const docs = await User.find({})
        console.log(docs);
        res.render('userdetails',{docs});
})

app.get('/guidedetails',isAdminAuthorised,async (req,res)=>{
    const docs = await Guide.find({})
        console.log(docs);
        res.render('guidedetails',{docs});
    // res.render('guidedetails');
})
app.get('/hoteldetails',isAdminAuthorised,async (req,res)=>{
    const docs = await Hotel.find({})
        console.log(docs);
        res.render('hoteldetails',{docs});
    // res.render('hoteldetails');
})
app.get('/agencydetails',isAdminAuthorised,async (req,res)=>{
    const docs = await Travel.find({})
        console.log(docs);
        res.render('agencydetails',{docs});
    // res.render('agencydetails');
})

app.get('/feedbacks',isAdminAuthorised,(req,res)=>{
    Feedback.find({})
    .then((result)=>{
        res.render('feedbacks',{result})
    })
})
// app.get('/dashboard',isAuthorised,(req,res)=>{
// res.redirect('dashboard')
// })


app.get('/dashboard',isAuthorised, (req,res)=>{
    User.find({_id:uid}).then((valuex)=>{
      uname=valuex[0]['username'];
      phone=valuex[0]['phoneno'];
      mail=valuex[0]['email'];
      Slot.find({username:value[0].username})
      .then((data)=>{
        //  console.log(data)
         
        //  console.log(data[0].status);
         res.render('dashboard',{ title:'Dashboard',x:x,name:uname,p:phone,mail:mail,data});
     })
})

})

app.post('/admin',(req,res)=>{
    message = req.body.message;
    const announce = new Announcement({
        adminannouncement:message,
    });
    announce.save()
        .catch((err)=>{console.log(err)})
    res.redirect('/admin');
})


app.post('/contact',(req,res)=>{
    email =value[0].email;
    review = req.body.review;
    const feedback = new Feedback({
        email:email,
        userfeedback:review,
    });
    feedback.save()
        .catch((err)=>{console.log(err)})
    res.redirect('/contact');
})


app.post('/dashboard', isAuthorised, (req,res)=>{
    username = req.body.username;
    phone = req.body.phone;
    email = req.body.email;
    User.findOneAndUpdate({ _id:uid }, { $set: { username:username,phoneno:phone,email:email } })
  .then((user) => {
    // Handling the updated user object here
    res.redirect("/dashboard");
    console.log(user);
  })
  .catch((err) => {
    // Handle the error here
    console.log(err);
  });

})

app.get('/guidedashboard',isGuideAuthorised, (req,res)=>{
    Guide.find({_id:gid}).then((valuex)=>{
      uname=valuex[0]['guide_name'];
      dob=valuex[0]['DOB'];
      language=valuex[0]['language'];
      location=valuex[0]['location'];
      phone=valuex[0]['contact'];
      mail=valuex[0]['email'];
      Slot.find({booking:{
        $elemMatch : {
            guide:uname
        }
      }})
      .then((result)=>{
        // console.log(uname);
        // console.log(result[1].username);
        // 
        console.log(result);
        res.render('guidedashboard',{ title:'Dashboard',x:x,name:uname,p:phone,mail:mail,lang:language,loc:location,dob:dob,result:result});
      })
      
    //   Slot.find({username:value[0].username})
    //   .then((data)=>{
    //      console.log(data)
    //      console.log(value[0].username)
    //  })
})
   
})


app.post('/guidedashboard',(req,res)=>{
    Slot.find({booking:{
        $elemMatch : {
            guide:uname
        }
      }})
      .then((result)=>{
        console.log(result[0].email);
        const email=result[0].email;
        // Slot.findOneAndUpdate({ email:gid }, { $set: { guide_name:username,DOB:gdob,contact:phone,email:email,location:location,language:guidelanguage } })

        let mailtransporter=nodemailer.createTransport({
            service:"gmail",
           auth:{
             user:"packyourbagspyb@gmail.com",
             pass:"rpnsacklhpgjktix"
           }
        
          })
          let details={
            from:"packyourbags@gmail.com",
            to:email,
            subject:"Your journey is Accepted",
            text:"Your journey has been confirmed on the date on the date : "+result[0].booking[0].date
          }
          mailtransporter.sendMail(details,(err)=>{
            if(err)
            console.log(err)
            else
            {
              sentdata="Email has been sent successfully";
              console.log('email has sent');
              res.redirect('/guidedashboard');
           }
           y = "Confirmed"
        })
      })
  })



app.get('/hoteldashboard',isHotelAuthorised, (req,res)=>{
    Hotel.find({_id:hid}).then((valuex)=>{
      uname=valuex[0]['hotelname'];
      oname=valuex[0]['ownername'];
      rooms=valuex[0]['totalrooms'];
      location=valuex[0]['location'];
      phone=valuex[0]['contact'];
      mail=valuex[0]['email'];
      Slot.find({booking:{
        $elemMatch : {
            hotel:uname
        }
      }})
      .then((result)=>{
        // console.log(uname);
        console.log(result[1]);
        res.render('hoteldashboard',{ title:'Dashboard',x:x,name:uname,phoneno:phone,mail:mail,rooms:rooms,loc:location,owner:oname,result:result});
      })
    //   res.render('hoteldashboard',{ title:'Dashboard',x:x,name:uname,phoneno:phone,mail:mail,rooms:rooms,loc:location,owner:oname});
      
    //   Slot.find({username:value[0].username})
    //   .then((data)=>{
    //      console.log(data)
    //      console.log(value[0].username)
    //  })
})
   
})





app.get('/traveldashboard',isTravelAuthorised, (req,res)=>{
    Travel.find({_id:tid}).then((valuex)=>{
      uname=valuex[0]['agencyname'];
      oname=valuex[0]['ownername'];
      transport=valuex[0]['transporttype'];
      location=valuex[0]['location'];
      phone=valuex[0]['contact'];
      mail=valuex[0]['email'];
      console.log(uname);
      Slot.find({booking:{
        $elemMatch : {
            agency:uname
        }
      }})
      .then((result)=>{
        // console.log(uname);
        console.log(result[1]);
        res.render('traveldashboard',{ title:'Dashboard',x:x,name:uname,phoneno:phone,mail:mail,transport:transport,loc:location,owner:oname,result:result});
      })
    //   name_user = value[0]['username'];
    //   contact = value[0]['phoneno'];
    //   Slot.find({username:value[0].username})
    //     .then((slot)=>{
    //         tdate = slot[0][booking][date]
    //     })
    // ,name_user:name_user,contact:phoneno,tdate:tdate
      
    //   Slot.find({username:value[0].username})
    //   .then((data)=>{
    //      console.log(data)
    //      console.log(value[0].username)
    //  })
})
   
})


app.post("/guidedashboard",isGuideAuthorised,(req,res)=>{
    username = req.body.guidename;
    gdob=req.body.gdob;
    phone = req.body.phoneno;
    guidelanguage=req.body.guidelanguage;
    email = req.body.gemail;
    location = req.body.location;
    console.log(gid);
    Guide.findOneAndUpdate({ _id:gid }, { $set: { guide_name:username,DOB:gdob,contact:phone,email:email,location:location,language:guidelanguage } })
    .then((user) => {
      // Handling the updated user object here
      res.redirect("/guidedashboard");
      console.log(user);
    })
    .catch((err) => {
      // Handle the error here
      console.log(err);
    });
})

app.post("/hoteldashboard",isHotelAuthorised,(req,res)=>{
    username = req.body.hotelname;
    owner=req.body.owner;
    phone = req.body.phoneno;
    rooms=req.body.rooms;
    email = req.body.oemail;
    location = req.body.location;
    // console.log(gid);
    Hotel.findOneAndUpdate({ _id:hid }, { $set: { hotelname:username,ownername:owner,contact:phone,email:email,location:location,totalrooms:rooms } })
    .then((user) => {
      // Handling the updated user object here
      res.redirect("/hoteldashboard");
      console.log(user);
    })
    .catch((err) => {
      // Handle the error here
      console.log(err);
    });
})


// isTravelAuthorised
app.post("/traveldashboard",(req,res)=>{
    username = req.body.agencyname;
    owner=req.body.owner;
    phone = req.body.phoneno;
    rooms=req.body.transport;
    email = req.body.oemail;
    location = req.body.location;
    // console.log(gid);
    Travel.findOneAndUpdate({ _id:tid }, { $set: { agencyname:username,ownername:owner,contact:phone,email:email,location:location,totalrooms:rooms } })
    .then((user) => {
      // Handling the updated user object here
      res.redirect("/traveldashboard");
      console.log(user);
    })
    .catch((err) => {
      // Handle the error here
      console.log(err);
    });
})





app.post('/remove',async function(req,res){
    console.log(req.body);
    (await Slot.findOneAndDelete({username:value[0].username,"booking.place_name":req.body.place}))
})
app.post('/removeuser',async function(req,res){
    // console.log("hello");
    // console.log(req.body);
    (await User.findOneAndDelete({email: req.body.email}))
    await Slot.deleteMany({email: req.body.email})
})
app.post('/removeguide',async function(req,res){
    // console.log("hello");
    // console.log(req.body);
    (await Guide.findOneAndDelete({email: req.body.email}))
})
app.post('/removehotel',async function(req,res){
    // console.log("hello");
    // console.log(req.body);
    (await Hotel.findOneAndDelete({email: req.body.email}))
})
app.post('/removeagency',async function(req,res){
    (await Travel.findOneAndDelete({email: req.body.email}))
})

app.post('/removebooking',async function(req,res){
    await Slot.findOneAndDelete({email:req.body.email})
})


app.post("/booking",isAuthorised,(req,res)=>{
    date = req.body.travel_date;
    guide_option = req.body.guide;
    agency_option = req.body.agency;
    hotel_option = req.body.hotel;
    console.log(date)
    console.log(guide_option)
    console.log(agency_option)
    console.log(hotel_option)
    let tourplace  = newPlace.split(",");
    const slot = new Slot({
        username:value[0].username,
        email:value[0].email,
        booking:[{
            place_name:tourplace[0],
            date:date,
            guide:guide_option,
            agency:agency_option,
            hotel:hotel_option}]
    });
    slot.save()
        
        .catch((err)=>{console.log(err)})
        res.redirect("/dashboard");

})


function isPasswordValid(password)
{
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
}
let data1;
app.post('/register',(req,res)=>{
    username=req.body.Username;
    phoneno=req.body.Phone;
    email=req.body.email;
    pswd=req.body.pwd;
    cnfpswd=req.body.cpwd;
    if(!isPasswordValid(pswd))
    {
    ep="Password must contain at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)'"
    }
    else{ep="";}
    
    if(pswd !==cnfpswd)
    {
    cep="Password do not match";
    }
    else
    cep="";
    if(isPasswordValid(pswd)&&pswd===cnfpswd)
    {
        const user = new User({
                        username:username,
                        phoneno:phoneno,
                        email:email,
                        password:pswd
                    });
                    user.save()
                        
                        .catch((err)=>{console.log(err)})
        res.redirect('/Login')
    }
    else
    {
        res.redirect('/register')
    }
})

app.post('/GuideReg',(req,res)=>{
    gname = req.body.gname;
    dob = req.body.gdob;
    email=req.body.gemail;
    phno = req.body.gno;
    pswd=req.body.gpwd;
    cnfpswd=req.body.gcpwd;
    lang = req.body.glang;
    gname = req.body.gname;
    dropdown = req.body.dropdown
    if(!isPasswordValid(pswd))
    {
    ep="Password must contain at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)'"
    }
    else{ep="";}
    
    if(pswd !==cnfpswd)
    {
    cep="Passwords do not match";
    }
    else
    cep="";

    if(isPasswordValid(pswd)&&pswd===cnfpswd)
    {
        const guide = new Guide({
            guide_name:gname,
            DOB:dob,
            contact:phno,
            email:email,
            password:pswd,
            location:dropdown,
            language:lang
        });
        guide.save()
            .catch((err)=>{console.log(err)})
        res.redirect('/Guidelogin')
    }
    else
    {
        res.redirect('/GuideReg')
    }
})

app.post("/planTour",(req,res)=>{
    destination = req.body.destination;
    console.log(destination);
     Place.find({})
        .then((data)=>{
            package.find({})
                .then((packages)=>{
                    details1=packages.filter((package)=>{return package.name.toLowerCase().includes(destination.toLowerCase())})
                    details=data.filter((place)=>{return place.name.toLowerCase().includes(destination.toLowerCase())});
                    console.log(details);
                    res.render("planTour",{places:details,packages:details1,x:x})
            })
        })
})




app.post('/HotelReg',(req,res)=>{
    hname = req.body.hname;
    honame=req.body.honame;
    hno = req.body.hno;
    email=req.body.hemail;
    pswd=req.body.hpwd;
    cnfpswd=req.body.cnfhpwd;
    dropdown = req.body.dropdown
    trooms = req.body.trooms;
    console.log(hname);
    if(!isPasswordValid(pswd))
    {
    ep="Password must contain at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)'"
    }
    else{ep="";}
    
    if(pswd !==cnfpswd)
    {
    cep="Passwords do not match";
    }
    else
    cep="";

    if(isPasswordValid(pswd)&&pswd===cnfpswd)
    {
        console.log(honame)
        const hotel = new Hotel({
            hotelname:hname,
            ownername:honame,
            contact:hno,
            email:email,
            password:pswd,
            location:dropdown,
            totalrooms:trooms
        });
        hotel.save()
            .catch((err)=>{console.log(err)})
        res.redirect('/HotelLogin');
    }
    else
    {
        res.redirect('/HotelReg')
    }
})

app.post('/TravelReg',isAuthorised,(req,res)=>{
    console.log(req.body);
    aname = req.body.agname;
    email=req.body.aemail;
    pswd=req.body.apwd;
    cnfpswd=req.body.apwd;
    transportType = req.body.transport;
    phno = req.body.phno;
    oname=req.body.owner;
    dropdown = req.body.dropdown;
    console.log(aname);
    console.log(email);
    console.log(pswd);
    console.log(oname);
    console.log(aname);
    console.log(dropdown);
    if(!isPasswordValid(pswd))
    {
    ep="Password must contain at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)'"
    }
    else{ep="";}
    
    if(pswd !==cnfpswd)
    {
    cep="Passwords do not match";
    }
    else
    cep="";

    if(isPasswordValid(pswd)&&pswd===cnfpswd)
    {
        const travel = new Travel({
            agencyname:aname,
            ownername:oname,
            contact:phno,
            email:email,
            password:pswd,
            location:dropdown,
            transporttype:transportType
        });
        travel.save()
            .catch((err)=>{console.log(err)})
        res.redirect('/TravelLogin');
    }
    else
    {
        res.redirect('/TravelReg')
    }
})


// db.run(`DELETE FROM register`);
// && pswd=="Pybags@2023"

app.post('/Login',async (req,res)=>{
    email=req.body.email;
    pswd=req.body.pwd;
    console.log(email,pswd);
    value=await User.find({email:email,password:pswd});
    // uname=value[0].username
    // console.log(value[0].username);
    if(email=="pybadmin@gmail.com" && pswd=="Pybags@2023" ){
        req.session.isAdminAuth=true;
        console.log(email);
        res.redirect('/admin');
    }
   else if(value.length==1){
        uname=value[0].username
        phone=value[0].phoneno
        mail=value[0].email
        uid=value[0]._id
        console.log(uid);
        x=false;
        req.session.isAuth=true;
        sn="";
        res.redirect('/')
        }
        else
        {
        sn="Incorrect Login details";
        res.redirect('/Login');
        }   
});

app.post('/Guidelogin',async (req,res)=>{
    email=req.body.email;
    pswd=req.body.pwd;
    console.log(email,pswd);
    guidedetails=await Guide.find({email:email,password:pswd});
    if(guidedetails.length==1){
        gid = guidedetails[0]._id;
        guidename = guidedetails[0].guide_name
        gdob = guidedetails[0].DOB
        gemail = guidedetails[0].email
        guidelanguage = guidedetails[0].language
        location = guidedetails[0].location
        phoneno = guidedetails[0].contact
        sn="";
        req.session.isGuideAuth=true;
        res.redirect('/guidedashboard')
        }
        else
        {
        sn="Incorrect Login details";
        res.redirect('/Guidelogin');
        }});

app.post('/TravelLogin',async (req,res)=>{
    email=req.body.aemail;
    pswd=req.body.apwd;
    console.log(email,pswd);
    travelvalue=await Travel.find({email:email,password:pswd});
    if(travelvalue.length==1){
        tid = travelvalue[0]._id;
        agencyname = travelvalue[0].agencyname
        ownername = travelvalue[0].ownername
        email = travelvalue[0].email
        totalrooms = travelvalue[0].transporttype
        location = travelvalue[0].loacation
        contact = travelvalue[0].contact
        req.session.isTravelAuth=true;
        sn="";
        res.redirect('/traveldashboard')
        }
        else
        {
        sn="Incorrect Login details";
        res.redirect('/TravelLogin');
        }
    });

app.post('/HotelLogin',async(req,res)=>{
    email=req.body.hemail;
    pswd=req.body.hpwd;
    console.log(email,pswd);
    hotelvalue=await Hotel.find({email:email,password:pswd});
    if(hotelvalue.length==1){
        hid = hotelvalue[0]._id;
        hotelname = hotelvalue[0].hotelname
        ownername = hotelvalue[0].ownername
        email = hotelvalue[0].email
        totalrooms = hotelvalue[0].totalrooms
        location = hotelvalue[0].loacation
        contact = hotelvalue[0].contact
        // gemail = guidedetails[0].email
        // guidelanguage = guidedetails[0].language
        // location = guidedetails[0].location
        // phoneno = guidedetails[0].contact
        req.session.ishotelAuth=true;
        sn="";
        res.redirect('/hoteldashboard')
        }
        else
        {
        sn="Incorrect Login details";
        res.redirect('/HotelLogin');
        }
    });

// app.get('/pop',(req,res)=>{

//     console.log(packages);

//     const modified_packages=packages.map((package)=>{
//          return{
//             name:package.name,
//             category:package.category,
//             content:package.content,
//             visit:package.visit
//          }
//     });

//     console.log(modified_packages);

//     package.create(modified_packages).then(()=>{
//         console.log("data added");
//         res.write("success");
//         res.end()
//     }).catch((err)=>{
//         console.log(err);
//     })

    

// });

// db.all(`select * from register`,(err,rows)=>{
//       if (err) {
//         console.error(err.message);
//       }
//       console.log(rows);
//     })

function inclog(req,res,next)
{
    next();
    sn="";
}
function uplog(req,res,next)
{
    next();
    ev="";
    ep="";
    cep="";
}


// default page 
