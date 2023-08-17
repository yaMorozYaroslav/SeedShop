import Layout from '../../comps/layout';

/*function getAllPostIds(){
	const posts = await axios.get(
              'https://item-auth-back-0555af6b9518.herokuapp.com/items')
	          .then((res) => res.data.items)
	return posts
	}*/
async function getPostData(id){
	const posts = await axios.get(
              'https://item-auth-back-0555af6b9518.herokuapp.com/items')
	          .then((res) => res.data.items)
	const post = posts.filter(item => {
		     (if item._id === id){return item}
			 return null}
	return post
	}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post() {
  return <Layout>...</Layout>;
}
