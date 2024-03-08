import { ClipboardCheck, Gem, Handshake, Headset, HeartHandshake, Home, Landmark, Map, Puzzle, Wrench } from "lucide-react";

export const navigationBarTitles = [
    {
        title: 'home',
        route: '',
        icon: <Home />
    },
    {
        title: 'inventory',
        route: 'inventory',
        icon: <ClipboardCheck />
    },
    {
        title: 'specials',
        route: 'specials',
        icon: <Gem />
    },
    {
        title: 'finance',
        route: 'finance',
        icon: <Landmark />
    },
    {
        title: 'service',
        route: 'service',
        icon: <Wrench />
    },
    {
        title: 'parts',
        route: 'parts',
        icon: <Puzzle />
    },
    {
        title: 'collision center',
        route: 'collision_center',
        icon: <HeartHandshake />
    },
    {
        title: 'dealership',
        route: 'dealership',
        icon: <Handshake />
    },
    {
        title: 'contact us',
        route: 'contact_us',
        icon: <Headset />
    },
    {
        title: 'map',
        route: 'map',
        icon: <Map />
    },
]







