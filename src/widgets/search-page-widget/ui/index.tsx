import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchInput } from "./search-input";
import { SearchView } from "./search-view";
import "./index.scss";

export const SearchPageWidget = () => {
  const [query] = useSearchParams();
  const [search, setSearch] = useState<string>(query.get("prompt") ?? "");
  return (
    <div className={"search-page-widget"}>
      <SearchInput value={search} setValue={setSearch} />
      {search.length && <SearchView search={search} />}
    </div>
  );
};
