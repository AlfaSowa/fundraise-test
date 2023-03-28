import { SearchIcon } from "../../../assets/searchIcon";
import { Box } from "../../../shared/components/box";
import { Input } from "../../../shared/components/form";

export const Header = () => {
  return (
    <div className="mb-6">
      <Box>
        <div>
          <div className="py-[28px] px-[32px]">
            <h1>Donations</h1>
          </div>

          <div className="h-[72px] flex items-center px-[32px] border-t border-[var(--color-border)] bg-[#FAFAFA] gap-10">
            <div className="flex items-center w-[336px] rounded-lg border border-[var(--color-border)]">
              <button
                className="pl-3 pr-2"
                onClick={() => console.log("Search")}
              >
                <SearchIcon />
              </button>

              <input
                placeholder="Search"
                className="h-10 w-full rounded-lg"
                type="text"
              />
            </div>

            <div>All statuses</div>
          </div>
        </div>
      </Box>
    </div>
  );
};
