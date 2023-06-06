
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE status (
	id SERIAL PRIMARY KEY,
	name VARCHAR(24)
);

INSERT INTO status (name) VALUES ('Built'), ('Incomplete'), ('Designed');

CREATE TABLE pc (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	status_id INT REFERENCES status (id),
	color VARCHAR(16),
	price_total INT,
	max_wattage INT,
	user_id INT REFERENCES "user" (id)
);

CREATE TABLE component_type (
	id SERIAL PRIMARY KEY,
	type VARCHAR(24)
);

CREATE TABLE component (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80),
	image VARCHAR(160),
	price INT,
	money_spent INT,
	component_type_id INT references component_type (id),
	subtype VARCHAR(40),
	specs VARCHAR(180),
	compatibility VARCHAR(120),
	speed VARCHAR(60),
	efficiency VARCHAR(24),
	wattage INT
);

CREATE TABLE pc_component (
	id SERIAL PRIMARY KEY,
	pc_id INT REFERENCES pc (id),
	component_id INT REFERENCES component (id)
);

INSERT INTO component_type (type) VALUES ('gpu'), ('cpu'), ('cpu_cooler'), ('psu'), ('motherboard'), ('memory'), ('storage'), ('case');

INSERT INTO component (name, image, price, component_type_id, specs, wattage) 
VALUES (
'Nvidia GeForce RTX 4090', 
'https://m.media-amazon.com/images/I/71RgD3MP-hL._AC_SX679_.jpg', 
1600, 
1, 
'CUDA Cores: 16384, Boost Clock (GHz): 2.52, Memory Size: 24 GB',
450
), 

(
'AMD Radeon RX 7900 XTX', 
'https://www.amd.com/system/files/2022-10/1678052-amd-radeon-7900xtx-1260x709.png', 
1000, 
1, 
'Boost Clock (GHz): 2.5, Memory Size: 24 GB',
355
), 

(
'AMD Radeon RX 7900 XT', 
'https://www.amd.com/system/files/2022-11/1678052-amd-radeon-7900xt-1260x709.png', 
900, 
1, 
'Boost Clock (GHz): 2.4, Memory Size: 20 GB',
315
), 

(
'Nvidia GeForce RTX 4070 Ti', 
'https://cdn.thepcenthusiast.com/wp-content/uploads/2023/04/nvidia-geforce-rtx-4070-founders-edition-02.jpg', 
800, 
1, 
'CUDA Cores: 7680, Boost Clock (GHz): 2.61, Memory Size: 12 GB',
285
), 

(
'Nvidia GeForce RTX 4070', 
'https://cdn.thepcenthusiast.com/wp-content/uploads/2023/04/nvidia-geforce-rtx-4070-founders-edition-02.jpg', 
600, 
1, 
'CUDA Cores: 5888, Boost Clock (GHz): 2.48, Memory Size: 12 GB',
200
), 

(
'AMD Radeon RX 6800', 
'https://techgage.com/wp-content/uploads/2020/11/AMD-Radeon-RX-6800-XT-Angle-View-680x357.jpg', 
580, 
1, 
'Boost Clock (GHz): 2.1, Memory Size: 16 GB',
250
), 

(
'AMD Radeon RX 6700 XT', 
'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6457/6457624_sd.jpg', 
480, 
1, 
'Boost Clock (GHz): 2.58, Memory Size: 12 GB',
230
), 

(
'AMD Radeon RX 6650 XT', 
'https://www.amd.com/system/files/2022-04/1303168-AMD-Radeon-RX-6650-XT-angled-1260x709.png', 
400, 
1, 
'Boost Clock (GHz): 2.63, Memory Size: 8 GB',
180
), 

(
'Nvidia GeForce RTX 3060', 
'https://m.media-amazon.com/images/I/81uFpNyjm5L.jpg', 
330, 
1, 
'CUDA Cores: 3584, Boost Clock (GHz): 1.78, Memory Size: 8 GB',
170
), 

(
'Intel Arc A750', 
'https://c1.neweggimages.com/ProductImage/14-883-002-07.jpg', 
250, 
1, 
'Clock (GHz): 2.05, Memory Size: 8 GB',
225
), 

(
'AMD Radeon RX 6600', 
'https://www.amd.com/system/files/2021-07/910022-amd-radeon-6600XT-angle1260x709_0.png', 
330, 
1, 
'Boost Clock (GHz): 2.49, Memory Size: 8 GB',
132
), 

(
'Intel Arc A380', 
'https://www.hwcooling.net/wp-content/uploads/2022/04/Grafick%C3%A1-karta-Intel-Arc-Limited-Edition-upoutavka.jpg', 
140, 
1, 
'Boost Clock (GHz): 2.0, Memory Size: 6 GB',
75
), 

(
'Nvidia GeForce RTX 3060 Ti', 
'https://m.media-amazon.com/images/I/81uFpNyjm5L.jpg', 
400, 
1, 
'CUDA Cores: 4864, Boost Clock (GHz): 1.67, Memory Size: 8 GB',
200
), 

(
'Nvidia GeForce RTX 3080', 
'https://i.ebayimg.com/images/g/m6oAAOSwoDRjbOHE/s-l640.jpg', 
700, 
1, 
'CUDA Cores: 8704, Boost Clock (GHz): 1.71, Memory Size: 10 GB',
320
), 

(
'Nvidia GeForce RTX 3080 Ti', 
'https://www.notebookcheck.net/fileadmin/Notebooks/NVIDIA/GeForce_RTX_3080_Ti_Founders_Edition/Ampere_3080Ti_Back_1.jpg', 
1200, 
1, 
'CUDA Cores: 10240, Boost Clock (GHz): 1.67, Memory Size: 12 GB',
350
), 

(
'Nvidia GeForce RTX 3070', 
'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3070/geforce-rtx-3070-shop-630-d@2x.png', 
500, 
1, 
'CUDA Cores: 5888, Boost Clock (GHz): 1.73, Memory Size: 8 GB',
220
), 

(
'Nvidia GeForce RTX 3070 Ti', 
'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6465/6465789_sd.jpg', 
600, 
1, 
'CUDA Cores: 6144, Boost Clock (GHz): 1.77, Memory Size: 8 GB',
290
), 

(
'Nvidia GeForce RTX 4080', 
'https://m.media-amazon.com/images/I/71m9FJCubXL.jpg', 
1200, 
1, 
'CUDA Cores: 9728, Boost Clock (GHz): 2.51, Memory Size: 16 GB',
320
), 

(
'AMD Radeon RX 7600', 
'https://www.amd.com/system/files/2023-05/2029064-amd-radeon-rx-7600-og.jpg', 
270, 
1, 
'Boost Clock (GHz): 2.65, Memory Size: 8 GB',
165
), 

(
'AMD Radeon RX 6900 XT', 
'https://www.amd.com/system/files/2020-10/579976-radeon-rx-6000xt-left-angle-1260x709_0.png', 
1000, 
1, 
'Boost Clock (GHz): 2.25, Memory Size: 16 GB',
300
)
;

INSERT INTO component (name, image, price, component_type_id, specs, compatibility, wattage) VALUES (
'AMD Ryzen 5 5600X',
'https://www.amd.com/system/files/2020-09/616656-amd-ryzen-5-5000-series-PIB-fan-1260x709.png',
200,
2,
'Cores: 6, Threads: 12, Base Clock (GHz): 3.7',
'AM4',
65
),

(
'Intel Core i9-13900K',
'https://m.media-amazon.com/images/I/71k+Zrz-Y0L.jpg',
590,
2,
'Cores: 24, Threads: 32, Base Clock (GHz): 3.0',
'FCLGA1700',
250
),

(
'AMD Ryzen 9 5900X',
'https://www.amd.com/system/files/2020-09/616656-amd-ryzen-9-5000-series-PIB-1260x709_0.png',
570,
2,
'Cores: 12, Threads: 24, Base Clock (GHz): 3.7',
'AM4',
105
),

(
'AMD Ryzen 5 3600',
'https://c1.neweggimages.com/ProductImage/19-113-569-V10.jpg',
200,
2,
'Cores: 6, Threads: 12, Base Clock (GHz): 3.6',
'AM4',
65
),

(
'AMD Ryzen 7 5800X',
'https://m.media-amazon.com/images/I/61DYLoyNRWL.jpg',
450,
2,
'Cores: 8, Threads: 16, Base Clock (GHz): 3.8',
'AM4',
105
),

(
'AMD Ryzen 5 5600G',
'https://m.media-amazon.com/images/I/51f2hkWjTlL.jpg',
260,
2,
'Cores: 6, Threads: 12, Base Clock (GHz): 3.9',
'AM4',
65
),

(
'AMD Ryzen 7 3700X',
'https://m.media-amazon.com/images/I/71Q2Vcw-wlL.jpg',
330,
2,
'Cores: 8, Threads: 16, Base Clock (GHz): 3.6',
'AM4',
65
),

(
'AMD Ryzen 7 5700X',
'https://m.media-amazon.com/images/I/61eXyK93hQL._AC_UF894,1000_QL80_.jpg',
300,
2,
'Cores: 8, Threads: 16, Base Clock (GHz): 3.4',
'AM4',
65
),

(
'AMD Ryzen 9 7950X',
'https://m.media-amazon.com/images/I/51APBaH8CFL._AC_UF894',
700,
2,
'Cores: 16, Threads: 32, Base Clock (GHz): 4.5',
'AM5',
170
),

(
'Intel Core i7-12700H',
'https://c1.neweggimages.com/ProductImage/19-118-345-05.jpg',
750,
2,
'Cores: 14, Threads: 20, Base Clock (GHz): 4.7',
'FCBGA1744',
115
);

INSERT INTO component (name, image, price, component_type_id, specs, compatibility, wattage) VALUES 
('Intel Core i7-10700K', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6411/6411488_sd.jpg;maxHeight=640;maxWidth=550', 270, 2, 'Cores: 8, Threads: 16, Base Clock (GHz): 3.8', 'FCLGA1200', 125);

INSERT INTO component (name, image, price, component_type_id, subtype, specs, speed, compatibility, wattage) VALUES 
('NZXT Kraken Z63 RGB', 'https://nzxt.com/assets/cms/34299/1631207832-kraken-z63-rgb-white-keyshot.png?auto=format&fit=crop&h=1000&w=1000', 275, 3, 'liquid', '2x 140mm', '500-1500 RPM', 'Intel: Socket LGA 1700, 1200, 115X. AMD: AMD Socket AM5, AM4, sTRX4, TR4.', 5);


INSERT INTO component (name, image, price, component_type_id, subtype, specs, compatibility, wattage) VALUES 
('MSI MPG Z490 GAMING PLUS', 'https://asset.msi.com/resize/image/global/product/product_1682648567e6d88a858cda2c22ecdf46c8fc7e6c27.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png', 110, 5, 'ATX', 'DIMM Slots: 4, PCI-E X16 Slots: 2, PCI-E X1 Slots: 3, M.2 Slots: 2, USB Ports: 6', '1200', 100);

INSERT INTO component (name, image, price, component_type_id, subtype, specs, wattage) VALUES 
('Corsair Vengeance RGB Pro 32GB (2 x 16 GB)', 'https://cdna.pcpartpicker.com/static/forever/images/product/e508c7c5a301831579045f9fda179aac.256p.jpg', 80, 6, 'DDR4', '32 GB', 5);

INSERT INTO component (name, image, price, component_type_id, subtype, specs, wattage) VALUES 
('Crucial P1 1TB SSD', 'https://m.media-amazon.com/images/I/61uqrREgItL._AC_SX679_.jpg', 120, 7, 'SSD', '1 TB', 3);


INSERT INTO component (name, image, price, component_type_id, subtype, specs, efficiency, wattage) VALUES 
('Corsair RM750 Gold Certified Fully Modular PSU', 'https://m.media-amazon.com/images/I/81ICbUpnIpL.__AC_SY300_SX300_QL70_FMwebp_.jpg', 125, 4, 'Fully Modular', '750 W', 'Gold', 0);

INSERT INTO component (name, image, price, component_type_id, subtype, compatibility, wattage) VALUES 
('NZXT H5 Flow', 'https://nzxt.com/assets/cms/34299/1666138830-h5-flow-hero-white.png?auto=format&fit=crop&h=1000&w=1000', 95, 8, 'Mid-Tower', 'Mini-ITX, Micro-ATX, ATX', 0);