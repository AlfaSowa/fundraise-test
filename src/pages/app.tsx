import { useCallback, useMemo, useState } from "react";
import { CalendarIcon } from "../assets/calendarIcon";
import { CancelIcon } from "../assets/cancelIcon";
import { CheckIcon } from "../assets/checkIcon";
import { CopyIcon } from "../assets/copyIcon";
import { DollarIcon } from "../assets/dollarIcon";
import { RepeateIcon } from "../assets/repeatIcon";
import { WalletIcon } from "../assets/walletIcon";
import { DonationsTabs } from "../entities/donations-tabs";
import PublicLayout from "../layouts/public.layout";
import { Box } from "../shared/components/box";
import { Container } from "../shared/components/container";
import { List, ListItem } from "../shared/components/list";
import { Header } from "../widgets/header";
import { MainBlock } from "../widgets/main";
import { Sidebar } from "../widgets/sidebar";

enum STATUS {
  SUCCEEDED = "Succeeded",
  ERROR = "Error",
}

export const App = () => {
  const [id, setId] = useState("TYNY694Y");

  const sidebarData = [
    {
      title: "Change amount",
      icon: <RepeateIcon />,
    },
    {
      title: "Change payment method",
      icon: <WalletIcon />,
    },
    {
      title: "Change date",
      icon: <CalendarIcon />,
    },
    {
      title: "Cancel recurring",
      icon: <CancelIcon />,
    },
  ];

  const donationsData = [
    {
      title: "Status",
      status: STATUS.SUCCEEDED,
    },
    {
      title: "Supporter",
      link: "Charlotte Ann",
      href: "#",
    },
    {
      title: "Campaign",
      link: "Heart walk",
      href: "#",
    },
  ];

  const getStatus = useCallback((status: STATUS): string => {
    switch (status) {
      case STATUS.ERROR:
        return "text-red-500";

      default:
        return "text-[var(--color-green)]";
    }
  }, []);

  return (
    <PublicLayout>
      <Header />

      <Container>
        <Sidebar>
          <Box>
            <List>
              {sidebarData.map((i) => (
                <ListItem icon={i.icon}>{i.title}</ListItem>
              ))}
            </List>
          </Box>
        </Sidebar>

        <MainBlock>
          <Box>
            <div>
              <div className="py-[24px] px-[32px] flex">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-[2px]">
                    <div className="text-[#009FFD] ">
                      <DollarIcon />
                    </div>
                    <span>Donation</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-[var(--color-green)] text-2xl">
                      $20.60 USD
                    </span>
                    <span className="text-[#6C6D6F]">≈ €17.92 EUR</span>
                  </div>
                </div>
                <div>
                  <div className="text-[#919293] font-code">ID</div>
                  <div className="flex ite gap-2">
                    <span>{id}</span>
                    <button
                      className="text-[#6C6D6F]"
                      onClick={() => console.log(id)}
                    >
                      <CopyIcon />
                    </button>
                  </div>
                </div>
              </div>

              <div className="h-[78px] flex items-center px-[32px] border-t border-[var(--color-border)] bg-[#FAFAFA]">
                {donationsData.map((i) => (
                  <div className="px-8 border-r-2 border-[var(--color-border)] last:border-0 last:pr-0 first:pl-0">
                    <div className="text-sm text-[#6C6D6F] mb-[2px] ">
                      {i.title}
                    </div>
                    {i.status && (
                      <div
                        className={`${getStatus(
                          i.status
                        )} flex items-center gap-2`}
                      >
                        <CheckIcon />
                        {i.status}
                      </div>
                    )}
                    {i.link && (
                      <a
                        className="text-[#6665DD] underline block"
                        href={i.href}
                      >
                        {i.link}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Box>

          <DonationsTabs />
        </MainBlock>
      </Container>
    </PublicLayout>
  );
};
