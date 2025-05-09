const apartmentService = require("../services/apartmentService");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const apartments = await apartmentService.getAllApartment();
        res.status(200).json(apartments);
    } catch (error) {
        console.error("Error fetching apartments:", error);
        res.status(500).json({ message: "Failed to fetch apartments" });
    }

});

router.get("/rating/:rating", async (req, res) => {
    try {
        const rating = parseInt(req.params.rating);
        const apartments = await apartmentService.getApartmentByRating(rating);
        res.status(200).json(apartments);
    } catch (error) {
        console.error("Error fetching apartments:", error);
        res.status(500).json({ message: "Failed to fetch apartments" });
    }
});

router.get("/", async (req, res) => {
    try {
        const search = req.query.search;
        if (search) {
            const apartments = await apartmentService.getAllResultsApartment(search);
            return res.status(200).json(apartments);
        }
    } catch (error) {
        console.error("Error fetching apartments:", error);
        res.status(500).json({ message: "Failed to fetch apartments" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const rawId = req.params.id;
        const cleanId = rawId.trim();
        const apartments = await apartmentService.getApartmentById(cleanId);
        res.status(200).json(apartments);
    } catch (error) {
        console.error("Error fetching apartments:", error);
        res.status(500).json({ message: "Failed to fetch apartments" });
    }

});

module.exports = router;


