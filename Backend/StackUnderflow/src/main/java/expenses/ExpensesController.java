package expenses;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping
public class ExpensesController {

    @PostMapping("api/v1/expenses")
    public void createExpense(@RequestBody ExpenseDto expenseRequest){
        log.info("new expense create request {}", expenseRequest);
        System.out.println(expenseRequest.toString());
    }
}
