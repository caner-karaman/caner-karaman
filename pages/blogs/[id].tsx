import { NextPage } from "next";
import Container from "../../components/Container";
import { getAllPostIds, getPostData } from '../../lib/posts'

interface IPost {
  contentHtml: string;
  title: string;
  date: string;
}
interface BlogProps {
  postData: IPost;
}

const Blog: NextPage<BlogProps> = ({postData: {title, contentHtml, date}}) => {
  return (
    <>
      <Container>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </Container>
    </>
  )
}

export default Blog;

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}