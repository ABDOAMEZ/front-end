import { useState } from "react";


export const UserTimezone = () => {
    const [countries] = useState({
        "Pacific/Honolulu": "United States",
        "Pacific/Midway": "United States",
        "America/Anchorage": "United States",
        "America/Los_Angeles": "United States",
        "America/Denver": "United States",
        "America/Chicago": "United States",
        "America/New_York": "United States",
        "America/Toronto": "Canada",
        "America/Vancouver": "Canada",
        "America/Mexico_City": "Mexico",
        "America/Bogota": "Colombia",
        "America/Caracas": "Venezuela",
        "America/Argentina/Buenos_Aires": "Argentina",
        "America/Sao_Paulo": "Brazil",
        "Atlantic/Azores": "Portugal",
        "Atlantic/Reykjavik": "Iceland",
        "Europe/London": "United Kingdom",
        "Europe/Dublin": "Ireland",
        "Europe/Paris": "France",
        "Europe/Berlin": "Germany",
        "Europe/Madrid": "Spain",
        "Europe/Rome": "Italy",
        "Europe/Amsterdam": "Netherlands",
        "Europe/Brussels": "Belgium",
        "Europe/Stockholm": "Sweden",
        "Europe/Oslo": "Norway",
        "Europe/Helsinki": "Finland",
        "Europe/Moscow": "Russia",
        "Asia/Istanbul": "Turkey",
        "Asia/Dubai": "United Arab Emirates",
        "Asia/Kolkata": "India",
        "Asia/Dhaka": "Bangladesh",
        "Asia/Jakarta": "Indonesia",
        "Asia/Bangkok": "Thailand",
        "Asia/Hong_Kong": "Hong Kong",
        "Asia/Shanghai": "China",
        "Asia/Tokyo": "Japan",
        "Asia/Seoul": "South Korea",
        "Asia/Singapore": "Singapore",
        "Australia/Perth": "Australia",
        "Australia/Sydney": "Australia",
        "Pacific/Auckland": "New Zealand",
        "Pacific/Fiji": "Fiji",
        "Africa/Cairo": "Egypt",
        "Africa/Lagos": "Nigeria",
        "Africa/Johannesburg": "South Africa",
        "Africa/Nairobi": "Kenya",
        "Africa/Algiers": "Algeria",
        "Africa/Casablanca": "Morocco",
      });
      // console.log(countries[Intl.DateTimeFormat().resolvedOptions().timeZone])

    return countries[Intl.DateTimeFormat().resolvedOptions().timeZone] ;

    
}