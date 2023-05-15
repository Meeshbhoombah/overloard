# Overlord
An employee management system

## Features
### User
- [ ] Employee registration
    - [ ] Full name
    - [ ] Birthday
    - [ ] Email
    - [ ] Phone Number
    - [ ] Address
- [ ] Employee login
    - [ ] Employee can edit fields
- [ ] Admin login
- [ ] Admin dashboard
    - [ ] View all employees
    - [ ] View pie-chart of employees by category
        + [ ] Pre-defined categories:
            * [ ] C-Suite
            * [ ] Human Resources
            * [ ] Product Manager
            * [ ] Engineer
            * [ ] Design
            * [ ] Sales
            * [ ] Marketing
    - [ ] Search for employee or employees
        + [ ] By name
        + [ ] Filter by position
        + [ ] Download to CSV

### Developer
#### Database
- [x] MariaDB configuration in `application.resources`
    + **Note**: for production, reconfigure:
        * `datasource.url` to production database
        * `jpa.hibdernate.ddl-auto` to `validate`
- [ ] Automatic MariaDB connection string reading from `.env`
    + [ ] Development
    + [ ] Production
- [ ] Database field validation on INSERT or UPDATE
    + [ ] Employee
    + [ ] Admin

