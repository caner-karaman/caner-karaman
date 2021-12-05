import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components';
import breakpoints from '../common/breakpoints';
import BlogListItem from '../components/BlogListItem';
import Container from '../components/Container';
import Header from "../components/Header";
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts'

const PageTitle = styled.h1`
  padding-top: 120px;

  ${breakpoints.device.xl}{
    padding-top: 100px;
  }
  ${breakpoints.device.sm}{
    padding-top: 70px;
    line-height: 1.3;
  }
`

interface PostData{
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string;
}

interface BlogListProps{
  allPostsData: Array<PostData>
}

const BlogList: NextPage<BlogListProps> = ({allPostsData}) => {
  console.log(allPostsData);
  return (
    <Layout path="blogs">
      <Head>
        <title>Bloglarım</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <Container>
          <PageTitle />
          {allPostsData.map(({id, title, date, description, tags}) => (
            <BlogListItem href={`blogs/${id}`} key={id} title={title} date={date} tags={tags} description={description}/>
          ))}
        </Container>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default BlogList;


