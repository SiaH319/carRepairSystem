package ca.mcgill.ecse321.repairsystem.dao;

import java.sql.Date;

import java.sql.Time;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import ca.mcgill.ecse321.repairsystem.model.*;

@Repository
public class RepairSystemRepository {

	@Autowired
	EntityManager entityManager;

	@Transactional
	public Customer createCustomer(String name, int id, String aPassword, int aPhone, String aEmail, RepairSystem aRepairSystem, String aCreditHash, String aDebitHash, String aAddress) {
		Customer c = new Customer(name, id, aPassword, aPhone, aEmail, aRepairSystem);
		entityManager.persist(c);
		return c;
	}
	
	@Transactional
	public AdministrativeAssistant createAdministrativeAssistant(String aName, int id, String aPassword, int aPhone, String aEmail, RepairSystem aRepairSystem) {
		AdministrativeAssistant a = new AdministrativeAssistant(aName, id,aPassword, aPhone, aEmail, aRepairSystem);
		entityManager.persist(a);
		return a;
	}
	
	@Transactional
	public Mechanic createMechanic(String aName, int id, String aPassword, int aPhone, String aEmail, RepairSystem aRepairSystem, Service... allCapabilities) {
		Mechanic m = new Mechanic(aName,id, aPassword, aPhone, aEmail, aRepairSystem, allCapabilities);
		return m;
	}

	@Transactional
	public Customer getCustomer(int aId) {
		Customer c = entityManager.find(Customer.class, aId);
		return c;
	}
	
	@Transactional
	public AdministrativeAssistant getAdminiatrativeAssistant(int aId) {
		AdministrativeAssistant a = entityManager.find(AdministrativeAssistant.class, aId);
		return a;
	}
	
	@Transactional
	public Mechanic getMechanic(int aId) {
		Mechanic m = entityManager.find(Mechanic.class, aId);
		return m;
	}
	

}