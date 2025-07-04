import { formatDate } from "@lib/utils";
import type { CollectionItem } from "./SearchCollection";

type Props = {
  entry: CollectionItem;
  pill?: boolean;
};

export default function ArrowCard({ entry, pill }: Props) {
  return (
    <a
      href={`/${entry.collection}/${entry.slug}`}
      class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"
    >
      <div class="w-full group-hover:text-black group-hover:dark:text-white blend">
        <div class="flex flex-wrap items-center gap-2">
          {pill && (
            <div class="text-sm capitalize px-2 py-0.5 rounded-full border border-black/15 dark:border-white/25">
              {entry.collection === "blog" ? "post" : "showcase"}
            </div>
          )}
          <div class="text-sm uppercase">{formatDate(entry.data.date)}</div>
        </div>
        <div class="font-semibold mt-3 text-black dark:text-white line-clamp-2">
          {entry.data.title}
        </div>

        {entry.data.summary !== "undefined" && (
          <div class="text-sm line-clamp-2">{entry.data.summary}</div>
        )}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"
      >
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        />
        <polyline
          points="12 5 19 12 12 19"
          class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        />
      </svg>
    </a>
  );
}
