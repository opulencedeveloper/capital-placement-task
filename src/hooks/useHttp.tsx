import { useCallback, useState } from "react";

import { RequestConfigType } from "../../shared/types";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(async (requestConfig: RequestConfigType, applyData: (data: any) => void) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:4010/api/${requestConfig.url}/application-form`,
        {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: {
            'Accept': '*/*',
            "Content-Type": "application/json",
          },
          body: requestConfig.method && JSON.stringify(
            {
              data: {
                id: '497f6aca-6276-4993-bfeb-53cbbbba6f05',
                "type": "applicationForm",
                "attributes": {
                  "coverImage": "http://example.com",
                  "personalInformation": {
                    "firstName": {
                      "internalUse": false,
                      "show": true
                    },
                    "lastName": {
                      "internalUse": false,
                      "show": true
                    },
                    "emailId": {
                      "internalUse": false,
                      "show": true
                    },
                    "phoneNumber": {
                      "internalUse": false,
                      "show": true
                    },
                    "nationality": {
                      "internalUse": false,
                      "show": true
                    },
                    "currentResidence": {
                      "internalUse": false,
                      "show": true
                    },
                    "idNumber": {
                      "internalUse": false,
                      "show": true
                    },
                    "dateOfBirth": {
                      "internalUse": false,
                      "show": true
                    },
                    "gender": {
                      "internalUse": false,
                      "show": true
                    },
                    "personalQuestions": [
                      {
                        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                        "type": "Paragraph",
                        "question": "string",
                        "choices": [
                          "string"
                        ],
                        "maxChoice": 0,
                        "disqualify": false,
                        "other": false
                      }
                    ]
                  },
                  "profile": {
                    "education": {
                      "mandatory": true,
                      "show": true
                    },
                    "experience": {
                      "mandatory": true,
                      "show": true
                    },
                    "resume": {
                      "mandatory": true,
                      "show": true
                    },
                    "profileQuestions": [
                      {
                        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                        "type": "Paragraph",
                        "question": "string",
                        "choices": [
                          "string"
                        ],
                        "maxChoice": 0,
                        "disqualify": false,
                        "other": false
                      }
                    ]
                  },
                  "customisedQuestions": [
                    {
                      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                      "type": "Paragraph",
                      "question": "string",
                      "choices": [
                        "string"
                      ],
                      "maxChoice": 0,
                      "disqualify": false,
                      "other": false
                    },
                    requestConfig.body
                  ]
                }
              },
            }
          )
        }
      );
      if (response.ok) {
        let responseData: any = await response.json();
        applyData(responseData);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (err) {

      if (err instanceof Error) {
        console.log(err);
        if (err.message === "Failed to fetch") {
          setError("Network error! Please check your internet connection.");
        } else {
          setError("Something went wrong! Reload");
        }
      } else {
        setError("Error occurred, try again.");
      }
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;