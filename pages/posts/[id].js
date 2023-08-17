import Layout from '../../comps/layout/Layout';
import axios from 'axios'

async function getAllPostIds(){
	const posts = await axios.get(
              'https://item-auth-back-0555af6b9518.herokuapp.com/items')
	          .then((res) => res.data.items)
	return posts.map((post) => {
    return {
      params: {
        id: post._id,
      },
    }
  })
	}
async function getPostData(id){
	const posts = await axios.get(
              'https://item-auth-back-0555af6b9518.herokuapp.com/items')
	          .then((res) => res.data.items)
	const post = posts.filter(item => {
		     if (item._id === id){return item}
			 return null})
	return post[0]
	}
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({postData}) {
	console.log(postData)
  return <Layout>{postData._id}</Layout>;
}
