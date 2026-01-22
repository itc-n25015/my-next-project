import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/libs/microcms";
import ButtonLink from "@/app/components/Buttonlink";
import styles from "./page.module.css"
import Article from "@/app/components/Article";

type Props = {
    params: {
        slug: string;
    };
};

export default async function Page({ params}: Props) {
  const data = await getNewsDetail(params.slug ).catch(notFound);

  return (
    <>
     <Article data={data} />
     <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
     </div>
    </>
  );
}
    