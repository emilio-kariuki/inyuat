/* eslint-disable @next/next/no-async-client-component */
"use client";
import { QUALITY, Supplier, Product } from "@prisma/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Check, ChevronLeft, ChevronsUpDown, LoaderIcon } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v1 as uuidv1 } from "uuid";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";

function DashboardLoading() {
  return (
    <div className="mt-60 flex h-full w-full items-center justify-center">
      <LoaderIcon className="h-8 w-8 animate-spin" />
    </div>
  );
}

const formSchema = z.object({
  id: z.string().cuid(),
  inventoryNumber: z.string().startsWith("INV-"),
  total: z.number().positive({
    message: "Total number of products must be greater than 0",
  }),
  userId: z.string().startsWith("user_"),
  supplierId: z.string().startsWith("SUPP_"),
  quantity: z.number().positive({
    message: "Quantity must be greater than 0",
  }),
  deliveryNote: z.string().nullable(),
  product: z.array(
    z.object({
      name: z.string(),
      quantity: z.number().positive(),
      quality: z.nativeEnum(QUALITY),
      description: z.string(),
    })
  ),
});

const quality = [
  {
    value: "GOOD",
    label: "good",
  },
  {
    value: "FAIR",
    label: "fair",
  },
  {
    value: "REJECT",
    label: "reject",
  },
];

export default function OrderCreate() {
  const user = useUser();
  const id = uuidv1();
  const inventoryNumber = `INV-${id}`;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  let product: Product[] = [];

  const { data: suppliers, isLoading: loading } = useQuery<Supplier[]>({
    queryKey: ["supplier"],
    queryFn: async () => {
      const { data } = await axios.get("/api/v1/supplier");
      return data as Supplier[];
    },
    staleTime: 6 * 1000,
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: id,
      inventoryNumber: inventoryNumber,
      total: 0,
      userId: user.user?.id,
      supplierId: "",
      quantity: 0,
      deliveryNote: "",
      product: [
        {
          name: "",
          quantity: 0,
          quality: QUALITY.GOOD,
          description: "",
          inventoryId: "",
        },
      ],
    },
  });

  const onSubmit = (data: any) => {
    mutate(data);
  };

  const { mutate } = useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post("/api/v1/inventory", data);
      return response.data;
    },
  });

  return (
    <main className="flex flex-col h-full min-h-screen w-full items-start justify-start bg-white p-[28px]">
      <div className="flex flex-row gap-4 items-center justify-center mb-2">
        <Link href="/dashboard/orders">
          <ChevronLeft className="h-6 w-6 text-gray-500" />
        </Link>
        <h1 className="text-[20px] font-semibold">Add Inventory</h1>
      </div>

      <div className=" p-[30px] w-full items-start justify-start bg-white rounded-[30px] ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex mx-auto w-full"
          >
            <div className="flex flex-col w-full space-y-5">
              <div className="flex flex-row w-full gap-20">
                <FormField
                  control={form.control}
                  name="id"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Id</FormLabel>
                      <FormControl>
                        <Input
                          className="flex w-full py-6"
                          placeholder="Inventory id"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="inventoryNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Inventory Number</FormLabel>
                      <FormControl>
                        <Input
                          className="flex w-full py-6"
                          placeholder="inventory number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-row w-full gap-20">
                <div className="flex flex-col w-full gap-[10px]">
                  <label className="w-full font-medium text-[14px]">
                    Select Quality
                  </label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        size={"sm"}
                        role="combobox"
                        aria-expanded={open}
                        aria-label="Select Department"
                        className="w-full justify-between dark:text-white py-6"
                      >
                        {value
                          ? quality.find(
                              (framework) => framework.value === value
                            )?.label
                          : "Select quality"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command className="w-full">
                        <CommandInput placeholder="Search quality..." />
                        <CommandList>
                          <CommandEmpty>No quality found.</CommandEmpty>
                          <CommandGroup>
                            {quality.map((framework) => (
                              <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? "" : currentValue
                                  );
                                  setOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    value === framework.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {framework.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
                <FormField
                  control={form.control}
                  name="inventoryNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Inventory Number</FormLabel>
                      <FormControl>
                        <Input
                          className="flex w-full py-6 "
                          placeholder="inventory number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </form>
        </Form>
      </div>
      {/* add product section */}
      <div className="flex flex-col h-full min-h-screen w-full items-start justify-start bg-white p-[28px]">
        <h1 className="text-[16px] font-semibold mb-5">Add Product</h1>
        <div className="flex flex-row w-full gap-20">
          <FormField
            control={form.control}
            name="deliveryNote"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Delivery Note</FormLabel>
                <FormControl>
                  <Input
                    className="flex w-full py-6"
                    placeholder="Delivery Note"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Inventory Number</FormLabel>
                <FormControl>
                  <Input
                    className="flex w-full py-6"
                    placeholder="inventory number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </main>
  );
}
