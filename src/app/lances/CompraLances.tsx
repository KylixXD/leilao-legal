'use client';

import React, { useState } from "react";
import { Button, Label, TextInput } from 'flowbite-react';

const ComprarLances = () => {
//   const [quantidade, setQuantidade] = useState("");

  return (
    <div className="max-h-screen flex items-center justify-center">
        <div className="max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow flex items-center">
            <form className="flex max-w-md flex-col gap-4" >
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="qtdlance"
                        value="Compre seus Lances aqui"
                    />
                    </div>
                    <TextInput
                    id="qtdlance"
                    required
                    type="number"
                    />
                </div>
                <Button type="submit" color='purple'>
                    <a href="/">Comprar Lances</a>
                </Button>
            </form>
        </div>
    </div>
  );
};

export default ComprarLances;