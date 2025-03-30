import { getAllPostIds } from '../../../../lib/posts'

const CssCheckpoint = () => {
  return (
    <div className="m-auto h-auto w-1/2 flex justify-center items-center">
      <img id="logo" src="/css/css/Gomycode.svg" alt="Logo" />
      <div className="w-[500px] h-[300px] flex border justify-center items-center hover:bg-[rgb(227, 245, 149)]" >
        <a className="text-2xl text-black" >Website is under construction</a>
      </div>
    </div>

  )
}

export default CssCheckpoint

export async function generateStaticParams() {
  const paths = getAllPostIds();
  
  return paths.map((path) => ({ id: path.params.id }));
}