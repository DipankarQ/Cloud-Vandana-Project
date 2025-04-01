public class Employee {
    
    private int id;
    private String name;
    private double salary;
    
    
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    
    
    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + salary);
        System.out.println("---------------------");
    }
    
    
    public static void main(String[] args) {
    
        Employee emp1 = new Employee(101, "Max Odin", 50000.0);
        Employee emp2 = new Employee(102, "Dip Das", 60000.0);
        Employee emp3 = new Employee(103, "Rob Johnson", 55000.0);
        
        
        java.util.List<Employee> employeeList = new java.util.ArrayList<>();
        employeeList.add(emp1);
        employeeList.add(emp2);
        employeeList.add(emp3);
        
        
        for (Employee emp : employeeList) {
            emp.displayDetails();
        }
    }
}