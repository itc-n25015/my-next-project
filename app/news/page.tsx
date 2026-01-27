import { getNewsList } from "@/app/libs/microcms";
import NewsList from "@/app/components/NewList";
import Pagination from "../components/Pagination";
import { NEWS_LIST_LIMIT } from "../constants";
import SearchField from "../components/SearchField";

export default async function Page() {
    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });

    return (
    <>
    <SearchField />
    <NewsList news={news} />
    <Pagination totalCount={totalCount} />
    </>
    );
}
