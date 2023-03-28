import { useState } from "react";
import { Box } from "../../../shared/components/box";
import { Button } from "../../../shared/components/buttons";
import { Tab, TabsPanel } from "../../../shared/components/tabs";
import { Tabs } from "../../../shared/components/tabs/tabs";
import { Behavior } from "../../behavior";

export const DonationsTabs = () => {
  const [value, setValue] = useState(0);

  const tabs = [
    {
      title: "Behavior",
      content: <Behavior />,
    },
    {
      title: "Appearance",
      content: <div>Appearance</div>,
    },
    {
      title: "Custom Fields",
      content: <div>Custom Fields</div>,
    },
    {
      title: "Questions",
      content: <div>Questions</div>,
    },
    {
      title: "URL Control",
      content: <div>URL Control</div>,
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        {tabs.map((i, idx) => (
          <Tab value={idx}>{i.title}</Tab>
        ))}
      </Tabs>

      {tabs.map((i, idx) => (
        <TabsPanel value={value} index={idx}>
          {i.content}
        </TabsPanel>
      ))}

      <div className="flex gap-4 px-8 py-6 bg-[#FFFBEC] border-t border-[var(--color-border)]">
        <Button onClick={() => console.log(1)}>Save changes</Button>
        <Button variant="secondary" onClick={() => console.log(1)}>
          Add field
        </Button>
      </div>
    </Box>
  );
};
