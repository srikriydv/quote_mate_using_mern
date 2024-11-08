import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logIn, logOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:3000/api/v1",
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.user?.accessToken;
		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
	let response = await baseQuery(args, api, extraOptions);

	if (response?.error?.originalStatus === 403) {
		const refreshResponse = await baseQuery(
			"/auth/new_access_token",
			api,
			extraOptions
		);

		if (refreshResponse?.data) {
			api.dispatch(logIn({ ...refreshResponse.data }));
			response = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logOut());
		}
	}
	return response;
};

export const baseApiSlice = createApi({
	reducerPath: "api",
	baseQuery: baseQueryWithRefreshToken,
	tagTypes: ["User", "Customer", "Document"],
	endpoints: (builder) => ({}),
});

