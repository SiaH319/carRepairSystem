package ca.mcgill.ecse321.repairsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import ca.mcgill.ecse321.repairsystem.service.CarService;

@CrossOrigin(origins = "*")
@RestController
public class CarRestController {

	@Autowired
	private CarService service;

}



