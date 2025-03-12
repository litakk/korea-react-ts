import { GiHamburgerMenu } from "react-icons/gi";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Card from "../ui/custom/Card";

interface PatinentProps {}

const Patinent: React.FC<PatinentProps> = () => {
  return (
    <div>
      <div className="flex items-center  px-7">
        <div className="flex gap-7 items-center">
          <h1 className="text-3xl">Пациенты</h1>
          <img src="./analytic.png" className="w-3" alt="" />
          <GiHamburgerMenu />
        </div>
      </div>

      <div className="flex items-center justify-between px-7 text-[#838383]">
        <div className="">
          <p>Home / Level 2 / Level 3 / Пациенты</p>
        </div>

        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      <Card />
    </div>
  );
};

export default Patinent;
