import { NextPage } from "next";
import Head from "next/head";
import Container from "../../components/Container";
import { getAllPostIds, getPostData } from '../../lib/posts'
import Header from "../../components/Header";
import styled from 'styled-components';
import Layout from "../../components/Layout";
import breakpoints from "../../common/breakpoints";

interface IPost {
  contentHtml: string;
  title: string;
  date: string;
  description: string;
}
interface BlogProps {
  postData: IPost;
}

const PageTitle = styled.h1`
  padding-top: 120px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 25px;
  
  ${breakpoints.device.xl}{
    padding-top: 100px;
  }

  ${breakpoints.device.sm}{
    padding-top: 70px;
    margin-bottom: 15px;
    line-height: 38px;
  }
`

const Article = styled.article`
  background-color: #fff;
  padding: 0 15px;
  min-height: 100vh;
`

const Blog: NextPage<BlogProps> = ({postData: {title, contentHtml, description}}) => {
  return (
    <Layout path="blogs">
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <Article className="blog">
        <Container>
          <PageTitle>{title}</PageTitle>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </Container>
      </Article>
    </Layout>
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

interface IParams {
  id: string;
}
interface Props {
  params: IParams;
}

export async function getStaticProps({ params }: Props) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}