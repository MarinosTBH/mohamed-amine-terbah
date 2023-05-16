import React from 'react'
const ChapterThree = () => {

    const htmlContent = `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GOMYCODE </title>
    </head>
    <body>
        <header>
            <h1>MAT</h1>
            <nav>
                <ul></ul>
                <li><a href="">About</a></li>
                <li><a href="">Work </a></li>
                <li><a href="">Resume</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            </nav>
            <p class="text">This is the first Web Development project.</p>
        </header>
        
        <hr>
        
        <section id="About"> <h2>About</h2>
            <div id="div1"><p class="title">In this webpage we are going to utilize some basic html elements:
             <p class="text"> Click on the link to go to <a href="https://gomycode
            .com/TN-FR/home"> GOMYCODE website</a></p>
            </div>
            
            <hr>
    
            <section id="work">
            <div id="div2"><h2>Work</h2>
            <p class="title">GOMYECODE Youtube Channel</p>
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/olJOZp57FWM" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture" allowfullscreen></iframe> 
            <!-- Using embed -->
            </div>
            </section>
    
    
            <hr>
    
                <div id="div3"><h2>Contact</h2>
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
        
        <hr> 
    
        <footer>
            <h2>Thanks</h2>
        </footer>
    </body>
    </html>`
    return (
        <div>
            <h2>HTML Example with most used Tags</h2>
            <iframe
                srcDoc={htmlContent}
                title="Embedded HTML"
                width="100%"
                height="500px" />
            <a
                // href="https://github.com/MarinosTBH/Chapter_03_Checkpoint_HTML_29-03-22-/blob/dev/Index_1.html"
                href="index.html"
                target="_blank"
                rel='noopener noreferer'>
                Source code</a>
        </div>)
}
export default ChapterThree