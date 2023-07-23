import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const AllNews = ({ allNews }) => {
  return (
    <Row gutter={[16, 16]}>
      {allNews?.map((news) => (
        <Col key={news.id} span={6}>
          <Card title={news.title} bordered={false}>
            <Image
              width={100}
              height={100}
              layout="responsive"
              alt="news"
              src={news.image_url}
            />
            <p>{news.description.slice(0, 50) + "..."}</p>
            <p>Category:{news.category}</p>
            <p>Comment Count: {news.comment_count}</p>
            <Button type="primary">
              <Link href={`/news/${news.id}`}>See Detalis</Link>
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AllNews;
