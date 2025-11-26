import session from "express-session";

class StudentController{

   static get_session_info=(req,res)=>{
     console.log(req.session);
     console.log(req.session.id);
     console.log(req.session.cookie);
     console.log(req.session.cookie.maxAge);
     console.log(req.session.cookie.originalMaxAge);
     console.log(req.sessionID);
     res.send("Session info....");
   }

   static delete_session=(req,res)=>{
     req.session.destroy(()=>{
        console.log(`Session Deleted... cannot access session ${req.session.id}`);
     })
     res.send("session deleted!!!");
   }

}

export default StudentController