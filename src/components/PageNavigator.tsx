"use client";
import { Dispatch, SetStateAction } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PageNavigator({
  pageIndex,
  setPageIndex,
  pageSize,
  totalResults,
}: {
  pageIndex: number;
  setPageIndex: Dispatch<SetStateAction<number>>;
  pageSize: number;
  totalResults: number | undefined;
}) {
  const maxPages = (totalResults ?? 1) / pageSize;
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPageIndex((cur) => (cur > 0 ? cur - 1 : 0))}
          />
        </PaginationItem>
        {pageIndex > 1 && (
          <PaginationItem onClick={() => setPageIndex(pageIndex - 2)}>
            <PaginationLink>{pageIndex - 1}</PaginationLink>
          </PaginationItem>
        )}
        {pageIndex > 0 && (
          <PaginationItem onClick={() => setPageIndex(pageIndex - 1)}>
            <PaginationLink>{pageIndex}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink isActive>{pageIndex + 1}</PaginationLink>
        </PaginationItem>
        {pageIndex < maxPages - 1 && (
          <PaginationItem onClick={() => setPageIndex(pageIndex + 1)}>
            <PaginationLink>{pageIndex + 2}</PaginationLink>
          </PaginationItem>
        )}
        {pageIndex < maxPages - 2 && (
          <PaginationItem onClick={() => setPageIndex(pageIndex + 2)}>
            <PaginationLink>{pageIndex + 3}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              setPageIndex((cur) => (cur < maxPages ? cur + 1 : cur))
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
