
### Project Description
The project aims to develop an interactive and functional web and android application for a local automobile repair shop. The application will allow customers to have access and book a variety of services (towing, oil change, tire changes, regular maintenance, car repairs, etc.) which are offered by qualified technicians/mechanics working at the company. The technicians will be able to view their upcoming appointments and the administrator's assistant will be able to moderate, manage the shop's appointments and technician work schedule through the platform. This project is an updated/advanced version of a part of the ECSE321 project.

# Web Application
### Landing Page
![Landing Page](demo/web/landing_page.gif)

### Sign Up Page 
- Customer can sign up on this page. Mechanic’s account can only be created by admin.
![signup Page](demo/web/sign_up.gif)

## User as Administrator 
### Admin: Dashboard Page
Once the admin logs in, they are navigated to the admin dashboard page.
They can do the followings:
- View upcoming appointments
- Delete an appointment
- Edit appointment status
![Admin dashboard Page](demo/web/admin_dashboard.gif)

### Admin: Mechanic Management Page
On this page, the  admin can do the followings
- View mechanics
- Edit mechanic info
- Add a new mechanic
- Delete mechanic
- Search mechanic by the name
![Admin mechanic Page](demo/web/admin_mechanics.gif)

### Admin: Customer Management Page
On this page, the admin can do the followings
- View customers
- Edit customer info
- Add a car to a customer
- Book an appointment for a customer (this change is reflected on both the admin and customer dashboard page)
- Add new customer
- Search customer by name
- Delete customer

![Admin mechanic Page](demo/web/admin_customers.gif)

## User as Customer 
### Customer: Dashboard Page
Once a customer logs in, the customer is navigated to the customer dashboard page.
They can do the followings:
- View upcoming appointments
- Delete an appointment
![customer dashboard Page](demo/web/customer_dashboard.gif)
### Customer: Edit Profile Page
On this page, the customer can edit their information
![customer edit profile Page](demo/web/customer_edit_profile.gif)
### Customer: Book Appointment Page
On this page, the customer can do the followings:
- select date
- select time
- select service
- add a car
- select car
- select mechanic
- add notes
- book appointment (this change is reflected on both customer and admin dashboard page)
![customer edit profile Page](demo/web/customer_book_appointment.gif)
### Customer: Make Payment Page
On this page, the customer information is automatically filled up in each section and the customer can make payment
![customer edit profile Page](demo/web/customer_payment.gif)

## User as Mechanic
### Mechanic: Dashboard Page
Once a mechanic logs in, the mechanic is navigated to the mechanic dashboard page.
They can do the followings:
- View upcoming appointments
- Edit appointment status
- Delete an appointment
![mechanic dashboard Page](demo/web/mechanic_dashboard.gif)
### Mechanic: Edit Profile Page
On this page, the mechanic can edit their information
![mechanic edit profile Page](demo/web/mechanic_edit_profile.gif)



# Mobile Application
### Mobile android application is for the customers only, and thie application is interactive with the web application and vice versa

### Sign Up page
Once a new customer signs up on mobile app, the added new customer account is also shown in admin customer mangement page and customer dashboard page on the web application. (Demo only shows admin web page)
![mobile customer signup Page](demo/android/android_customer_singup.gif)

### Log In Page
![mobile login Page](demo/android/android_customer_login.gif)

### Customer: View Appointment Page (Dashboard Page)
Once a customer logs in or signs up, the customer is navigated to the view appointment page. 
They can see the list of appointments they have. Once they click an appointment they can see the details of that appointment.
![mechanic edit profile Page](demo/android/android_customer_view_app.gif)

### Customer: Book Appointment Page
The customer can select date, time, mechanic, service, car, and book appointment. They can also add a car.
This change is also shown in admin and customer page on the web application. (Demo only shows the customer dashboard web page)
![mechanic edit profile Page](demo/android/android_customer_boo_app.gif)


### Customer: Edit Profile Page
The customer can edit their inforamtion. This change is also shown in admin and customer page on the web application. (Demo only shows the customer dashboard web page)
![mechanic edit profile Page](demo/android/android_customer_edit_profile.gif)


### Customer: Make Payment Page
The customer can make payment. By default, each section is filled up with customer given information but the customer also can change this. They can also select the payment method (credit or debit)
![mechanic edit profile Page](demo/android/android_customer_make_payment.gif)

## Documentation
 - [Requirement Model](https://github.com/McGill-ECSE321-Winter2021/project-group-07/wiki/Requirements-Model-(requirements-&-use-case))
 - [Domain Model](https://github.com/McGill-ECSE321-Winter2021/project-group-07/wiki/Domain-Model-Iterations)
 - [RESTful Service Endpoints](https://github.com/McGill-ECSE321-Winter2021/project-group-07/wiki/RESTful-Service-Endpoints)
 - [Software Quality Assurance Plan and Report](https://github.com/McGill-ECSE321-Winter2021/project-group-07/wiki/Software-Quality-Assurance-Plan-and-Report)
 - [Architecture Model - Block Diagram](https://github.com/McGill-ECSE321-Winter2021/project-group-07/wiki/Architecture-Model)

