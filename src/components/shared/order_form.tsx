import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Control, UseFormReturn } from "react-hook-form";

const OrderForm = ({
  form,
  name,
  title,
  placeholder,

}: {
  form: UseFormReturn<any>;
  name: string;
  title: string;
  placeholder: string;

}) => {
  return (
    <div className="flex w-full">
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>{title}</FormLabel>
            <FormControl>
              <Input
                className="flex w-full py-6"
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default OrderForm;
