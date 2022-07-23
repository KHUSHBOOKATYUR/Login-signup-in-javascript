console.log("WELCOME IN LOGIN AND SIGNUP PAGE")
function signup(password){
    if(password.length>=6 && password.length<=16){
        if(password>="a" || password<="z" || password>="A" || password<="Z" ){
            if(password.includes("@") || password.includes("#")){
                console.log("strong")
            }else{
                console.log("Add spacial charater")
                const rs=require("readline-sync");
                var password=rs.question("Enter your passward again:");
                signup(password)

            }
        }else{
            console.log("Add alphabets")
            const rs=require("readline-sync");
            var password=rs.question("Enter your passward again:");
            signup(password)
        }
    }else{
        console.log("please check the lenght of passward, atleast 6 and maximum 16.")
        const rs=require("readline-sync");
        var password=rs.question("Enter your passward again:");
        signup(password)
    }
}
function confirm_password(password,con_password){
    if(password==con_password){
        console.log("correct")
    }else{
        console.log("your confirm passward is not match with passward.")
        const rs=require("readline-sync");
        var con_password=rs.question("Enter your confirm passward:");
    }
}

const rs=require("readline-sync");
var user=rs.question("What do you want login so press 2 or you want signup so press 1:");
const fs=require("fs");
var file=fs.existsSync("login signup.json");
if(file==false){
    if(user=="1"){
        var name=rs.question("Enter your Full name:");
        var password=rs.question("Enter your strong password:");
        signup(password)
        var con_password=rs.question("Enter your Confirm password:");
        console.log(password,con_password)
        console.log(`congrates ${name} you signed-up successfully!`)
        var dob=rs.question("Enter your Date of birth:");
        var gender=rs.question("Enter your Gender:");
        var Bio=rs.question("Enter your Bio:");
        var final_list=[],dict={};
        var list1=["Name","Password","D.O.B","Gender","Bio"];
        var list2=[name,password,dob,gender,Bio];
        for (let i in list1){
            dict[list1[i]]=list2[i]
        }
        final_list.push(dict)
        fs.writeFileSync("login signup.json",JSON.stringify(final_list,null,4))
    }
}else if(file==true){
    if(user=="1"){
        var name=rs.question("Enter your Full name:");
        var password=rs.question("Enter your strong password:");
        signup(password)
        var con_password=rs.question("Enter your Confirm password:");
        console.log(password,con_password)
        var data=fs.readFileSync("login signup.json");
        if (data.includes(name)){
            console.log("name is already exist!")
        }else{
            console.log(`congrates ${name} you signed-up successfully!`)
            var dob=rs.question("Enter your Date of birth:");
            var gender=rs.question("Enter your Gender:");
            var Bio=rs.question("Enter your Bio:");
            var final_list=[],dict={};
            var list1=["Name","Password","D.O.B","Gender","Bio"];
            var list2=[name,password,dob,gender,Bio];
            var list1=["Name","Password","D.O.B","Gender","Bio"];
            var list2=[name,password,dob,gender,Bio];
            var dict1={};
            for (let i in list1){
                dict1[list1[i]]=list2[i]
            }
            var data=fs.readFileSync("login signup.json")
            var data=JSON.parse(data)
            data.push(dict1)
            fs.writeFileSync("login signup.json",JSON.stringify(data,null,4))
        }
    }else if(user=="2"){
        var user_name=rs.question("Enter your name:");
        var user_password=rs.question("Enter your password:");
        var data=fs.readFileSync("login signup.json");
        var data=JSON.parse(data);
        for (let i in data){
            if(user_name==data[i]["Name"]){
                if(user_password==data[i]["Password"]){
                    console.log("Login successfuly !")
                    console.log(`Your name is ${data[i]["Name"]}Your Full informations are given below:-`)
                    for (let j in data[i]){
                        console.log(`${j}=${data[i][j]}`)
                    }
                } else {
                    console.log("Sorry this name is not exist in file")
                    break
                }

            }
            
        }
    }
}
