import React from "react";

const JsonLdSchema = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LegalService"],
    name: "InnerWork Legal Services",
    url: "https://innerworklegalservices.com/",
    telephone: "+91-9073672051",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Martin Burn House, 1 R.N. Mukherjee Rd, Gr Floor",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700001",
      addressCountry: "IN",
    },
    description:
      "Innerwork Legal Service is the best legal service provider in Kolkata. We offer expert guidance and comprehensive solutions tailored to your legal needs. Visit us for trusted, professional legal services.",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};

export default JsonLdSchema;
