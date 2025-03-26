import faker from "faker";

// In-memory storage for customers
let customers = [];

// Function to generate random customer records
const generateRandomCustomers = (count = 1000) => {
    try {
        // Clear existing customers
        customers = [];
        
        for (let i = 0; i < count; i++) {
            const customer = {
                name: faker.name.findName(),
                customerId: i,
                phoneNumber: faker.phone.phoneNumber('###-###-####')
            };
            customers.push(customer);
        }
        
        console.log(`Successfully generated ${count} random customer records`);
        return customers;
    } catch (error) {
        console.error('Error generating random customers:', error);
        throw error;
    }
};

// Function to get all customers
const getAllCustomers = () => {
    return customers;
};

export { generateRandomCustomers, getAllCustomers };
