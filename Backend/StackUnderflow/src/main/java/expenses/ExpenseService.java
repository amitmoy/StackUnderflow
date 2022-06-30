package expenses;

public record ExpenseService() {
    public void create(ExpenseDto expenseDto){
        Expense expense = Expense.builder()
                .description(expenseDto.description())
                .amount(expenseDto.amount())
                .build();
    }
}
