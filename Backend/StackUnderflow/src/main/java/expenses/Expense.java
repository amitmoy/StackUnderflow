package expenses;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Expense {
    private String description;
    private double amount;
}
