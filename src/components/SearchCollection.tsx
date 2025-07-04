import type { CollectionEntry } from "astro:content";
import { createEffect, createSignal, onMount } from "solid-js";
import Fuse from "fuse.js";
import ArrowCard from "./ArrowCard";
import SearchBar from "./SearchBar";

export type CollectionItem =
  | CollectionEntry<"blog">
  | CollectionEntry<"archive">
  | CollectionEntry<"showcase">;

type Props = {
  entry_name: string;
  data: CollectionItem[];
};

export default function SearchCollection({ entry_name, data }: Props) {
  const [query, setQuery] = createSignal("");
  const [filter, _] = createSignal(new Set<string>());
  const [collection, setCollection] = createSignal<CollectionItem[]>([]);
  const [descending, setDescending] = createSignal(false);

  const fuse = new Fuse(data, {
    keys: ["slug", "data.title"],
    includeMatches: true,
    minMatchCharLength: 1,
    threshold: 0.4,
  });

  createEffect(() => {
    let filtered: CollectionItem[];
    if (query().length === 0) {
      filtered = data;
    } else {
      filtered = fuse.search(query()).map((result) => result.item);
    }
    filtered = filtered.filter((entry) =>
      Array.from(filter()).every(
        (value) =>
          entry.data.title.toLowerCase().includes(value.toLowerCase()) ||
          entry.data.summary.toLowerCase().includes(value.toLowerCase())
      )
    );
    setCollection(descending() ? filtered.toReversed() : filtered);
  });

  function toggleDescending() {
    setDescending(!descending());
  }

  const onSearchInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setQuery(target.value);
  };

  onMount(() => {
    const wrapper = document.getElementById("search-collection-wrapper");
    if (wrapper) {
      wrapper.style.minHeight = "unset";
    }
  });

  return (
    <div class="flex justify-center">
      <div class="w-full max-w-xl">
        <div class="flex flex-col gap-6">
          {/* Search Bar */}
          <div class="flex justify-start">
            <SearchBar
              onSearchInput={onSearchInput}
              query={query}
              setQuery={setQuery}
              placeholderText={`Search ${entry_name}`}
            />
          </div>
          {/* Posts */}
          <div class="flex flex-col">
            {/* Info Bar */}
            <div class="flex justify-between flex-row mb-2">
              <div class="text-sm uppercase">
                SHOWING {collection().length} OF {data.length} {entry_name}
              </div>
              <button
                onClick={toggleDescending}
                class="flex flex-row gap-1 stroke-neutral-400 dark:stroke-neutral-500 hover:stroke-neutral-600 hover:dark:stroke-neutral-300 text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 hover:dark:text-neutral-300"
              >
                <div class="text-sm uppercase">
                  {descending() ? "DESCENDING" : "ASCENDING"}
                </div>
                <svg class="size-5 left-2 top-[0.45rem]">
                  <use
                    href={`/ui.svg#sort-descending`}
                    class={descending() ? "block" : "hidden"}
                  ></use>
                  <use
                    href={`/ui.svg#sort-ascending`}
                    class={descending() ? "hidden" : "block"}
                  ></use>
                </svg>
              </button>
            </div>
            <ul class="flex flex-col gap-3">
              {collection().map((entry) => (
                <li>
                  <ArrowCard entry={entry} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
