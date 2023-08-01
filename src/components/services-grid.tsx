import React from "react";
import { Tabs, TabsContent,TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

export type PriceProps = {
    time: string;
    price: string;
}

export type ServiceProps = {
    title: string;
    subtitle?: string;
    rates: PriceProps[];
}

export const ServicesGrid: React.FC = () => {
const serviceList: ServiceProps[] = [
        {
            title: 'Full Day Fishing',
            subtitle: '(up to 4 anglers)',
            rates: [
                {
                    time: '6 hours',
                    price: '$450'
                },
                {
                    time: '8 hours',
                    price: '$600'
                }
            ]
        },
        {
            title: 'Half Day Fishing',
            subtitle: '(up to 4 anglers)',
            rates: [
                {
                    time: '4 hours',
                    price: '$350'
                }
            ]
        },
        {
            title: 'Scalloping Trip w/ cleaning tutorial',
            rates: [
                {
                    time: '6 hours',
                    price: '$450'
                }
            ]
        },
        {
            title: 'Bird Watching / Eco Tours / Photography Tours',
            rates: [
                {
                    time: '4 hours',
                    price: '$300',
                },
                {
                    time: '6 hours',
                    price: '$400'
                }
            ]
        },
        {
            title: 'Sand Bar Trips',
            rates: [
                {
                    time: '4 hours',
                    price: '$300',
                }
            ]
        },
        {
            title: 'Sunset Cruise',
            rates: [
                {
                    price: '$250',
                    time: '2 hours'
                }
            ]
        },
    ]

    return (
        <div className="mx-auto grid md:grid-cols-3 gap-8 py-24">
            {serviceList.map((service, index) => (
                <Card key={index} className='flex flex-col motion-safe:hover:scale-105 duration-500'>
                    <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                        {service.subtitle && <CardDescription>{service.subtitle}</CardDescription>}
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue={service.rates[0]?.time}>
                            <TabsList className='flex'>
                                {service.rates.map((rate, index) => (
                                    <TabsTrigger key={index} value={rate.time} className='flex-1'>{rate.time}</TabsTrigger>
                                ))}
                            </TabsList>
                            {service.rates.map((rate, index) => (
                                <TabsContent key={index} value={rate.time}>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex justify-between'>
                                            <span className='italic'>Price:</span>
                                            <span className="font-medium">{rate.price}</span>
                                        </div>
                                        {/* {service.subtitle && (
                                            <div className='flex justify-between'>
                                                <span className="italic">Max Anglers:</span>
                                                <span className="font-medium">4</span>
                                            </div>
                                        )} */}
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </CardContent>
                </Card> 
            ))}
        </div>
    )
}