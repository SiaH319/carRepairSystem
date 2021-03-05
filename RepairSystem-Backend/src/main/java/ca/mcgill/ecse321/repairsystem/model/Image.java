package ca.mcgill.ecse321.repairsystem.model;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public class Image
{

  public Image(int id, String url, Appointment a) {
	  this.id = id;
	  this.url = url;
	  this.appointment = a;
  }
  
  public Image() {
	  
  }
  
  //Image Associations
  private Appointment appointment;
 
  @ManyToOne
  public Appointment getAppointment()
  {
    return this.appointment;
  }
  
  public void setAppointment(Appointment aAppointment)
  {
    this.appointment = aAppointment;
  }
  
  private int imageID;
  
  @Id
  public int getId() {
	  return this.imageID;
  }
  
  public void setId(int aId) {
	  this.imageID = aId;
  }
  
  private String url;
  
  public String getUrl() {
	  return this.url;
  }
  
  public void setUrl(String newUrl) {
	  this.url = newUrl;
  }
  
  
}