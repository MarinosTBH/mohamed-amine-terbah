import React from 'react'
import CodeBlock from './CodeBlock'
import Image from 'next/image'

const ChapterTwo = ({ title }) => {
    return (
        <>
            <p>
                -- Here is a tutorial to make and push a repository in github :
            </p>
            Before everything install git in your command-line : <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank" rel="noopener noreferrer">Install git </a>

            <p>Then, Make a new directory and enter it : </p>
            <CodeBlock message={`mkdir learn_git_again ${'\n'}$ cd learn_git_again`} />

            <p>Make a new file "third.txt" : </p>
            <CodeBlock message={"echo {'>>'} third.txt"} />

            <p>Now we go to git side and here are the steps : </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li>- Initialize a git repository</li>
                <CodeBlock message={"git init"} />
                <li>- Add the "third.txt" file to git</li>
                <CodeBlock message={"git add third.txt"} />
                <li>- Commit what you did in a message to save it in the git tree</li>
                <CodeBlock message={"git commit -m 'Adding third.txt'"} />
                <li>- Log the commits that you have, note that you will find the commit that you just did with some information </li>
                <CodeBlock message={"git log'"} />
                <li>- Repeat these steps with a new file "fourth.txt"</li>
                <CodeBlock message={`echo {'>>'} fourth.txt ${'\n'}$ git add third.txt ${'\n'}$ git commit -m 'Adding fourth.txt'`} />
                <li>- Now let's delete the "third.txt" file from git</li>
                <CodeBlock message={"git rm third.txt"} />
                <li>- Now let's commit again but using the --amend flag which will save our changes into the last commit (so it will not create a new commit)</li>
                <CodeBlock message={"git commit --amend"} />
            </ul>
            <Image src={`/Chapter2/1.png`} alt={title} width="687" height="730" />
            <Image src={`/Chapter2/3.png`} alt={title} width="687" height="730" />
            <p>- That's it, you are ready now to push your job into a remote git repository </p>
            <p>- But before, you need to go to {' '}
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">Github</a>          </p>
            <CodeBlock message={`git branch -M main ${'\n'}$ git remote add origin https://github.com/MarinosTBH/git_test.git ${'\n'}$ git push -u origin main`} />
            <p>- You should get an output like this : </p>
            <CodeBlock message={`git push -u origin main ${'\n'}Enumerating objects: 3, done. ${'\n'}Counting objects: 100% (3/3), done. ${'\n'}Delta compression using up to 8 threads ${'\n'}Compressing objects: 100% (2/2), done . ${'\n'}Writing objects: 100% (2/2), 237 bytes | 118.00 KiB/s, done. ${'\n'}Total 2 (delta 1), reused 0 (delta 0), pack-reused 0${'\n'}remote: Resolving deltas: 100% (1/1), completed with 1 local object.${'\n'}To github.com:username/repository.git${'\n'}1234567..890abcd  main -> main`} />
            <p>Flight is done for today, see you in next chapter ? Bye</p>
        </>
    )
}
export default ChapterTwo