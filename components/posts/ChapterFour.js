import React from 'react'
import CodeBlock from './CodeBlock';
const ChapterFour = () => {

    const htmlContent = `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GOMYCODE </title>
        <style>body{
            margin: 30px;
            font-family: Verdana, Geneva, Tahoma, sans-serif  ;
        }
        header{
            background: rgb(204, 199, 199);
            height: 110px;
            padding: 2px;
            margin: -8;
            border-bottom: 2px solid grey;
        }
        
        #myname:hover{
            background-color: rgb(170, 166, 173);
        }
        #myname{
            font-size:  50;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            font-style: italic;
            border-radius: 15px;
            padding-left: 10px;
            padding-right: 15px;
            transition: background-size .2s;
        }
        div{
            background-color: rgba(206, 205, 205, 0.24);
        }
        #div1{
            height: 110px;
            border-bottom: 2px solid grey;
            margin: -8;
        }
        #div2{
            height: auto;
            width:auto;
            border-bottom: 2px solid grey;
            margin-left: -48;
            margin-right: -50px;
            padding-bottom: 20px;
        }
        
        #div3{
            height: auto;
            width:auto;
            border-bottom: 2px solid grey;
            margin-left: -5;
            margin-right: -10px;
            
        }
        footer{
            background: rgb(204, 199, 199);
            height: 110px;
            padding: 2px;
            border-top: 2px solid grey;
            margin-top: 10px;
            margin-left: -6px;
        
        }
        h2{
            font-style: italic;
        }
        .text{
            font-weight:normal;
        }
        .title{
            font-weight: bold;
        }
        label, input, textarea, button{
            font-family: Verdana, Geneva, Tahoma, sans-serif  ;
            padding: 5px;
        }
        input{
            border-radius: 10px;
        }
        textarea{
            border-radius: 5px;
        }
        button{
            width: 100px;
            height: 50px;
            border-radius: 5px;
        }
        button:hover{
            background-color: blueviolet;
        }</style>
    </head>
    <body>
        <header>
            <a id="myname">MAT</a>
            <nav>
                <a href="#About">About</a>
                <a href="#Work">Work</a>
                <a href="#Contact">Contact</a>
                <a href="#Resume">Resume</a>
            </nav>
            <p class="text">This is the first Web Development project.</p>
        </header>
        
    
        <section id="container">   
            <div id="div1">
                    <section><h2 id="About">About</h2>
                <p class="title">In this webpage we are going to utilize some basic html elements:
             <p class="text"> Click on the link to go to <a href="https://gomycode
            .com/TN-FR/home"> GOMYCODE website</a></p>
            </div>
        </section>
        
            <figure>
            <div id="div2">
                <section><h2 id="Resume">Resume</h2></section>
            <p class="title">GOMYECODE Youtube Channel</p>
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/olJOZp57FWM" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture" allowfullscreen></iframe> 
            <!-- Using embed -->
            </div>
            </figure>
    
                <div id="div3">
                    <section><h2 id="Contact">Contact</h2></section>
                    <p class="title">Fill this form if you want to let a message for us, we will message you back</p>
                <form>
                    <label>Name</label>
                    <input type="text" name="First name " placeholder="Tag your first name ">
                    <br>
                    <label>Number</label>
                    <input type="number" name="number" placeholder="12345678">
                    <br>
                    <label>Email</label>
                    <input type="Email" name="email" placeholder="AZE123@mail.com">
                    <br>
                    <p>Tell us Something:</p>  
                    <textarea name="Message" cols="30" rows="10"></textarea>
                    <br>
                    <button type="submit">Submit</button>
                </form>
    
            </div>
        </section>
        
        
        <footer>
            <section><h2 id="Work">Work</h2></section>
        <p class="title">We are going to make a clone of GOMYCODE website.
            Here's the link : <a href="/posts/Chapter-4-CSS/css-checkpoint" target="_top">GOMYCODE Clone</a> 
        </p>
        </footer>
    </body>
    </html>`
    return (
        <div>
            <CodeBlock message={"p {\n    font-family: Arial;\n}"} iSCss={false}/>
            <CodeBlock message={"a {\n    color: blue;\n}"} iSCss={false}/>
            <CodeBlock message={"img {\n    border: 1px solid black;\n}"} iSCss={false}/>

            Otherwise here is an html css poor design made by me in my earliest days of web development: 
            <iframe
                srcDoc={htmlContent}
                title="Embedded HTML"
                width="100%"
                height="500px"
            />
            <a
                href="https://github.com/MarinosTBH/Chapter_04_Css_4_04_2022/"
                target="_blank"
                rel='noopener noreferer'>
                Source code</a>
            <p>See you soon!</p>
        </div>)
}
export default ChapterFour