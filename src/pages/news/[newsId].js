import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NewsDetails = ({ news }) => {
  const router = useRouter();
  return (
    <div>
      <Card title={news?.title} bordered={false}>
        <Image
          width={100}
          height={100}
          layout="responsive"
          alt="news"
          src={news?.image_url}
        />
        <p>{news?.description}</p>
        <p>Category:{news?.category}</p>
        <p>Comment Count: {news?.comment_count}</p>
      </Card>
    </div>
  );
};

export default NewsDetails;

NewsDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

/* export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/news");
  const allNews = await res.json();
  const paths = allNews.map((news) => ({
    params: { newsId: news.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/news/${params?.newsId}`);
  const data = await res.json();
  return {
    props: { news: data },
  };
};
 */

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/news/${params?.newsId}`);
  const data = await res.json();
  return {
    props: {
      news: data,
    },
  };
};
