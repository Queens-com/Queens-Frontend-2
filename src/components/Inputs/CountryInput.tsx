"use client";
import * as React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import styles from "./styles.module.scss";
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  useController,
} from "react-hook-form";
import { cn } from "../../lib/utils";
import { constants } from "../../config/constants";

interface SelectProps {
  base: string | string[];
  items: any[];
  label?: string;
  showSearch?: boolean;
  control: Control<FieldValues, object>;
  name: string;
  readOnly?: boolean;
  placeholder?: string;
  disableKeys: string[];
  isDisabled?: boolean;
  loading?: boolean;
  searchFunction?: (value: string, search: string) => number;
}

const { COUNTRY_LIST } = constants;

export function CountryInput({
  base,
  items = [
    {
      name: "test",
      label: "Update Rate",
      value: "update",
    },
    {
      name: "test",
      label: "Update Rate",
      value: "update",
    },
  ],
  placeholder = "Select Country",
  control,
  name,
  showSearch = false,
  loading,
  disableKeys = [""],
  isDisabled,
  readOnly,
  searchFunction,
}: SelectProps) {
  const [open, setOpen] = React.useState(false);
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: "Nigeria",
  });
  const { error } = fieldState;
  const fieldValue = field.value ?? "";

  return (
    <Popover
      modal={true}
      open={open}
      onOpenChange={(o) => {
        if (!isDisabled && !readOnly) setOpen(o);
      }}
    >
      <div className="space-y-2 w-full">
        <PopoverTrigger asChild>
          <div
            className={cn(
              `bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:text-gray-400 placeholder:font-normal placeholder:text-sm w-full h-10`,
              loading ? styles.inputLoading : "",
              field?.value && "text-[#4E5158]"
            )}
          >
            {field?.value ? (
              <div className="flex items-center gap-2">
                {items.find(
                  (item) =>
                    item.name.toLowerCase() ===
                    (field?.value ?? "").toLowerCase()
                ) && (
                  <img
                    src={`https://flagcdn.com/40x30/${items
                      .find(
                        (item) =>
                          item.name.toLowerCase() ===
                          (field?.value ?? "").toLowerCase()
                      )
                      .code.toLowerCase()}.png`}
                    alt={
                      items.find(
                        (item) =>
                          item.name.toLowerCase() ===
                          (field?.value ?? "").toLowerCase()
                      ).name
                    }
                    width={22}
                    style={{ marginLeft: "10px" }}
                  />
                )}
                <p>
                  {
                    items.find(
                      (item) =>
                        item.name.toLowerCase() ===
                        (field?.value ?? "").toLowerCase()
                    )?.name
                  }
                </p>
              </div>
            ) : (
              <p className="text-sm text-left text-gray-400">{placeholder}</p>
            )}

            {!loading && (
              <svg
                width="12"
                data-open={open}
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="absolute right-3 w-unit-4 h-unit-4 transition-transform duration-150 ease motion-reduce:transition-none data-[open=true]:rotate-180"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="black"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            )}
          </div>
        </PopoverTrigger>
      </div>
      <PopoverContent
        className={cn(` rounded-lg !text-[15px] p-2 bg-white h-44 w-full `, {
          "pt-0": showSearch,
        })}
      >
        <Command filter={searchFunction} className=" ">
          {showSearch && (
            <div className={cn("w-full", {})}>
              <CommandInput
                className={cn("py-6", {})}
                placeholder="Search..."
              />
            </div>
          )}
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup
            className={cn(
              `overflow-y-auto p-1 pb-0.5 space-y-3 w-full max-h-44`,
              {}
            )}
          >
            {items.map((item) => (
              <CommandItem
                key={item?.name}
                disabled={isDisabled}
                value={item.name || ""}
                onSelect={() => {
                  if (disableKeys.includes(item.name)) {
                    setOpen(open);
                  } else {
                    field?.onChange(
                      item.name === field?.value ? undefined : item.name
                    );
                    setOpen(false);
                  }
                }}
                className={`${` p-1 w-full ${
                  item.name === field?.value && "bg-blue-300"
                }`}`}
              >
                <span className={""}>
                  <div className="flex gap-2 items-center">
                    <img
                      src={`https://flagcdn.com/40x30/${item?.code.toLowerCase()}.png`}
                      alt={item?.name}
                      width={21}
                    ></img>
                    <p>{item?.name}</p>
                  </div>
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
