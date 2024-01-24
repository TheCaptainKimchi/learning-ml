# spark-ML

## Project Details

1. project.ipynb

   Following instructions laid out in YouTube tutorial:
   https://www.youtube.com/watch?v=JJCq21Dc-Us

2. valorant.ipynb

   Test Valorant data collected to train model and learn ML.

## Model Evaluation Results

1. Linear Regression
   Training MSE (0.138724): This is the Mean Squared Error for the Linear Regression model on the training data. A lower MSE indicates a better fit, suggesting the model predictions are reasonably close to the actual values in the training dataset.
   Training R2 (0.435969): This is the R-squared value for the training data. An R2 of 0.435969 means about 43.6% of the variation in the dependent variable is explained by the model, which is moderate.
   Test MSE (0.187916): This is the Mean Squared Error for the test dataset. It's higher than the training MSE, indicating that the model doesn't perform as well on unseen data.
   Test R2 (0.248334): The R2 value for the test dataset is significantly lower than for the training dataset, suggesting that the model's ability to explain the variance in the test data is weaker.

2. Random Forest
   Training MSE (0.134829): The MSE for the Random Forest model on the training data is slightly lower than that of Linear Regression, indicating a marginally better fit to the training data.
   Training R2 (0.451804): The R2 value is higher than that of the Linear Regression model, meaning the Random Forest model explains approximately 45.2% of the variance in the training dataset.
   Test MSE (0.148338): The Random Forest model has a lower MSE on the test data compared to its Linear Regression counterpart, suggesting it generalizes better to unseen data.
   Test R2 (0.406647): The R2 value for the test dataset is substantially higher than that of the Linear Regression model, indicating better predictive accuracy and variance explanation.

   ## Improvements

   1. For Both Models

      _Data Quality and Feature Engineering_

      Enhance Data Quality: Ensure your data is clean and free from errors. Removing outliers and handling missing values appropriately can significantly improve model performance.
      Feature Engineering: Create new features or transform existing ones to better capture the underlying patterns in the data. This could involve polynomial features for Linear Regression or interaction terms that might be useful.
      Feature Selection: Identify and retain the most informative features while removing irrelevant or redundant features. This can be achieved through methods like backward elimination, forward selection, or using feature importance scores in the case of Random Forest.

      _Cross-Validation_

      Implement Cross-Validation: Instead of a simple train-test split, use k-fold cross-validation to better estimate the model's performance and ensure that it is not overly dependent on a particular partition of the data.

3. Specific to Linear Regression

   _Regularization_

   Apply Regularization Techniques: Techniques like Ridge or Lasso regression can help prevent overfitting by penalizing large coefficients in the model.

   _Assumptions Validation_

   Check Model Assumptions: Ensure that the assumptions of Linear Regression (linearity, homoscedasticity, normality, and independence of errors) are met. If they are violated, consider transforming your data or using a different model.

4. Specific to Random Forest

   _Hyperparameter Tuning_

   Tune Model Parameters: Experiment with different settings for the number of trees, max depth of trees, min samples split, min samples leaf, and max features. Tools like GridSearchCV or RandomizedSearchCV can automate this process.

   _Ensemble Methods_

   Experiment with Ensemble Methods: Beyond a standard Random Forest, consider advanced ensemble techniques like gradient boosting or stacking different models to improve predictive performance.

5. General Techniques

   _Addressing Bias-Variance Tradeoff_

   Balancing Bias and Variance: If your model has high variance (overfitting), consider simplifying it, getting more data, or using techniques like bagging. If it suffers from high bias (underfitting), you might need a more complex model, or better features.

   _Additional Data_

   Collect More Data: If feasible, more data can help improve the model, especially in areas where the current model performs poorly.

6. Evaluation Strategy

   _Alternative Metrics_

   Use Different Evaluation Metrics: Depending on your problem's nature, consider other metrics like MAE (Mean Absolute Error), RMSE (Root Mean Squared Error), or domain-specific evaluation metrics.

   ## Summary

   The Random Forest model outperforms the Linear Regression model on both the training and test datasets, as indicated by the lower MSE and higher R2 values.
   The difference in performance between training and test datasets for both models suggests some degree of overfitting in the Linear Regression model, which is less pronounced in the Random Forest model.
   Overall, the Random Forest model appears to be a better choice for this particular dataset based on these metrics.
