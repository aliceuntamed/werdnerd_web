-- Remove accidentally enabled geospatial extensions that WerdNerd does not use.
-- CASCADE is intentionally omitted so PostgreSQL refuses to remove unexpected dependencies.
drop extension pgrouting;
drop extension postgis_raster;
drop extension postgis_sfcgal;
drop extension postgis;
