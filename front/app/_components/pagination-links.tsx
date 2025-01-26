import { ArrowLeft, ArrowRight } from "lucide-react";
import { FC } from "react";
import { Pagination, PaginationContent, PaginationItem } from "./ui/pagination";

interface PaginationLinksProps {
  lastPage: number;
}

const PaginationLinks: FC<PaginationLinksProps> = ({ lastPage }) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem></PaginationItem>
        <PaginationItem>
          <ArrowLeft />
        </PaginationItem>
        <PaginationItem>
          <ArrowRight />
        </PaginationItem>
        <PaginationItem></PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationLinks;
