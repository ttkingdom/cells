// Code generated by go-swagger; DO NOT EDIT.

package task

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"
	"time"

	"golang.org/x/net/context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"

	strfmt "github.com/go-openapi/strfmt"

	models "github.com/pydio/pydio-sdk-go/models"
)

// NewCreateTaskParams creates a new CreateTaskParams object
// with the default values initialized.
func NewCreateTaskParams() *CreateTaskParams {
	var ()
	return &CreateTaskParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewCreateTaskParamsWithTimeout creates a new CreateTaskParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewCreateTaskParamsWithTimeout(timeout time.Duration) *CreateTaskParams {
	var ()
	return &CreateTaskParams{

		timeout: timeout,
	}
}

// NewCreateTaskParamsWithContext creates a new CreateTaskParams object
// with the default values initialized, and the ability to set a context for a request
func NewCreateTaskParamsWithContext(ctx context.Context) *CreateTaskParams {
	var ()
	return &CreateTaskParams{

		Context: ctx,
	}
}

// NewCreateTaskParamsWithHTTPClient creates a new CreateTaskParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewCreateTaskParamsWithHTTPClient(client *http.Client) *CreateTaskParams {
	var ()
	return &CreateTaskParams{
		HTTPClient: client,
	}
}

/*CreateTaskParams contains all the parameters to send to the API endpoint
for the create task operation typically these are written to a http.Request
*/
type CreateTaskParams struct {

	/*RequestBody
	  JSON Task object

	*/
	RequestBody *models.Task
	/*TaskID
	  Task to launch on the server

	*/
	TaskID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the create task params
func (o *CreateTaskParams) WithTimeout(timeout time.Duration) *CreateTaskParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the create task params
func (o *CreateTaskParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the create task params
func (o *CreateTaskParams) WithContext(ctx context.Context) *CreateTaskParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the create task params
func (o *CreateTaskParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the create task params
func (o *CreateTaskParams) WithHTTPClient(client *http.Client) *CreateTaskParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the create task params
func (o *CreateTaskParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithRequestBody adds the requestBody to the create task params
func (o *CreateTaskParams) WithRequestBody(requestBody *models.Task) *CreateTaskParams {
	o.SetRequestBody(requestBody)
	return o
}

// SetRequestBody adds the requestBody to the create task params
func (o *CreateTaskParams) SetRequestBody(requestBody *models.Task) {
	o.RequestBody = requestBody
}

// WithTaskID adds the taskID to the create task params
func (o *CreateTaskParams) WithTaskID(taskID string) *CreateTaskParams {
	o.SetTaskID(taskID)
	return o
}

// SetTaskID adds the taskId to the create task params
func (o *CreateTaskParams) SetTaskID(taskID string) {
	o.TaskID = taskID
}

// WriteToRequest writes these params to a swagger request
func (o *CreateTaskParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.RequestBody != nil {
		if err := r.SetBodyParam(o.RequestBody); err != nil {
			return err
		}
	}

	// path param taskId
	if err := r.SetPathParam("taskId", o.TaskID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}